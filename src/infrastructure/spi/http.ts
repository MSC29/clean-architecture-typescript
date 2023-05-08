/* eslint-disable @typescript-eslint/no-misused-promises */
import fp from "fastify-plugin";
import {FastifyInstance, FastifyPluginCallback} from "fastify";
import axios from "axios";

import {ConfigEnvironment} from "adapter/spi/shared/environment.interface";
import {HttpConnection} from "adapter/spi/http/http_connection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const http: FastifyPluginCallback<ConfigEnvironment> = (server: FastifyInstance, opts: ConfigEnvironment, done: (err?: Error) => void): void => {
	try {
		server.decorate("httpConnection", new HttpConnection(axios));
		done();
	} catch (err) {
		console.error("error instantiating http driver");
		console.error(err);
		throw err;
	}
};

export default fp(http);
