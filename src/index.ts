import * as sourceMapSupport from "source-map-support";

import server from "infrastructure/app";

sourceMapSupport.install();

const start = async (): Promise<void> => {
	try {
		await server.listen(8080, "0.0.0.0");
		server.swagger();
		server.log.info(`listening on ${server.server.address().toString()}`);
	} catch (err: unknown) {
		console.error(err);
		server.log.error(err);
		process.exit(1);
	}
};

process.on("uncaughtException", (error: Error): void => {
	console.error("uncaughtException");
	console.error(error);
	process.exit(1);
});
process.on("unhandledRejection", (error: Error): void => {
	console.error("unhandledRejection");
	console.error(error);
	process.exit(1);
});

void start();
