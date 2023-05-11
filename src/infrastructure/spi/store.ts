/* eslint-disable @typescript-eslint/no-misused-promises */
import fp from "fastify-plugin";
import {FastifyInstance, FastifyPluginAsync} from "fastify";
import "reflect-metadata";
import {Connection, ConnectionOptions, createConnection} from "typeorm";
import * as path from "path";

import {ConfigEnvironment} from "adapter/spi/shared/environment.interface";
import {DbConnection} from "adapter/spi/db/db_connection";

const asyncDb: FastifyPluginAsync<ConfigEnvironment> = async (server: FastifyInstance, opts: ConfigEnvironment): Promise<void> => {
	try {
		const dbConfigOrm: ConnectionOptions = {
			database: opts.DATABASE_NAME,
			username: "postgres",
			password: "postgres",
			type: "postgres",
			entities: [path.join(__dirname, "/../../adapter/spi/db/db_models_dogs.ts"), path.join(__dirname, "/../../adapter/spi/db/db_models_cats.ts")],
			synchronize: true,
			logging: false
		};

		const orm: Connection = await createConnection(dbConfigOrm);

		console.log("connected to db");

		server.decorate("dbConnection", new DbConnection(orm));
	} catch (err) {
		console.error("error connecting to db");
		console.error(err);
		throw err;
	}
};

export default fp(asyncDb);
