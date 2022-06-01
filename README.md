# Shows error in current nw-builder for windows builds

In build.js, a console log before and after `nw.build()` is run. The "before" runs,
but not the "after".

It also does not run the zipping step (ie, I don't see the following text:

```
Create release folder in /app/build/NW Builder Test/win64
Zipping index.html
Zipping package.json
```

---

Change the devDependencies to:

```json
  "devDependencies": {
    "nw-builder": "NervosaX/nw-builder"
  }
```

to see the build correctly running.


# Note you can test with docker to test with wine

```
docker build .
```
