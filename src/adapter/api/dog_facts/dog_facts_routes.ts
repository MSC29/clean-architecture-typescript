import fp from "fastify-plugin";
import {FastifyReply, FastifyInstance, FastifyPluginAsync, FastifyRequest} from "fastify";

import {getAllDogFactsRouteSchema, getOneDogFactByIdRouteSchema} from "adapters/api/dog_facts/dog_facts_schemas";
import dogFactController from "adapters/api/dog_facts/dog_facts_controllers";
import {DogFactRequest} from "adapters/api/dog_facts/dog_facts_requests";

// eslint-disable-next-line @typescript-eslint/require-await
const asyncRoutes: FastifyPluginAsync = async (server: FastifyInstance): Promise<void> => {
	const BASE_URL: string = "/api/v1/dogs";

	server.route({
		method: "GET",
		url: `${BASE_URL}/`,
		handler: async (req: FastifyRequest, reply: FastifyReply): Promise<void> => dogFactController.getAllDogFactsRouteSchema(req, reply, server),
		schema: getAllDogFactsRouteSchema
	});

	server.route({
		method: "GET",
		url: `${BASE_URL}/:factId`,
		handler: async (req: FastifyRequest<DogFactRequest>, reply: FastifyReply): Promise<void> => dogFactController.getOneDogFactByIdRouteSchema(req, reply, server),
		schema: getOneDogFactByIdRouteSchema
	});
};

export default fp(asyncRoutes);
