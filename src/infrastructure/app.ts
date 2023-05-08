import fastify, {FastifyInstance} from "fastify";
import swagger from "@fastify/swagger";
import {Server, IncomingMessage, ServerResponse} from "http";
import fastifyEnv from "@fastify/env";
import fastifyCors from "@fastify/cors";

import {swaggerOptions} from "infrastructure/config/swagger";
import {envOptions} from "infrastructure/config/environment";

import db from "infrastructure/spi/store";
import http from "infrastructure/spi/http";
import repositories from "adapter/spi/shared/repositories";

import catFactsRoutes from "adapter/api/cat_facts/cat_facts_routes";
import dogFactsRoutes from "adapter/api/dog_facts/dog_facts_routes";

const env: NodeJS.ProcessEnv = process.env;
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({logger: env.ENV === "test" ? false : true});

//registering swagger before routes
void server.register(swagger, swaggerOptions);

//registering env specific components
server.register(fastifyEnv, envOptions).after((err: Error): void => {
	if (err) {
		console.error(err);
	}

	//security
	void server.register(fastifyCors, {origin: "*"});

	//spi
	void server.register(db, server.config);
	void server.register(http, server.config);

	//repositories
	void server.register(repositories, server.config);

	//routes
	void server.register(catFactsRoutes, server.config);
	void server.register(dogFactsRoutes, server.config);
});

export default server;
