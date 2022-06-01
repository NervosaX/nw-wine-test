const NwBuilder = require("nw-builder/lib/index.cjs");

async function run() {
	const nw = new NwBuilder({
		files: "src/**",
		platforms: ["win64"]
	});

	nw.on("log", console.log);

	console.log("Before")

	await nw.build();

	console.log("After")
}

(async () => {
	try {
		await run();
	} catch (e) {
		console.error(e);
	}
})();


