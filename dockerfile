FROM node:16

# Install wine and related packages
RUN apt-get update -qq \
		&& apt-get install --no-install-recommends -y -qq \
				wine

WORKDIR app

ENV WINEARCH win64

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

RUN node build.js
