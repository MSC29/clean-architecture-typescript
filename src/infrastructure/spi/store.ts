/* eslint-disable @typescript-eslint/no-misused-promises */
import fp from "fastify-plugin";
import {FastifyInstance, FastifyPluginAsync} from "fastify";
import "reflect-metadata";
import {Connection, ConnectionOptions, createConnection} from "typeorm";
import * as path from "path";

import {ConfigEnvironment} from "adapters/spi/shared/environment.interface";
import {DbConnection} from "adapters/spi/db/db_connection";

const asyncDb: FastifyPluginAsync<ConfigEnvironment> = async (server: FastifyInstance, opts: ConfigEnvironment): Promise<void> => {
	try {
		const dbConfigOrm: ConnectionOptions = {
			url: opts.DATABASE_URL,
			type: "postgres",
			entities: [path.join(__dirname, "/../../adapters/spi/db/models/**/*.*s")],
			synchronize: true,
			logging: opts.DB_LOGGING
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
