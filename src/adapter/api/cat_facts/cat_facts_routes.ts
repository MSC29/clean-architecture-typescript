import fp from "fastify-plugin";
import {FastifyReply, FastifyInstance, FastifyPluginAsync, FastifyRequest} from "fastify";

import {getAllCatFactsRouteSchema, getOneRandomCatFactRouteSchema} from "adapters/api/cat_facts/cat_facts_schemas";
import catFactController from "adapters/api/cat_facts/cat_facts_controllers";

// eslint-disable-next-line @typescript-eslint/require-await
const asyncRoutes: FastifyPluginAsync = async (server: FastifyInstance): Promise<void> => {
	const BASE_URL: string = "/api/v1/cats";

	server.route({
		method: "GET",
		url: `${BASE_URL}/`,
		handler: async (req: FastifyRequest, reply: FastifyReply): Promise<void> => catFactController.getAllCatFactsRouteSchema(req, reply, server),
		schema: getAllCatFactsRouteSchema
	});

	server.route({
		method: "GET",
		url: `${BASE_URL}/random`,
		handler: async (req: FastifyRequest, reply: FastifyReply): Promise<void> => catFactController.getOneRandomCatFactRouteSchema(req, reply, server),
		schema: getOneRandomCatFactRouteSchema
	});
};

export default fp(asyncRoutes);
