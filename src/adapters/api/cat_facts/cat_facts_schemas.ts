import {FastifySchema} from "fastify";

export const getAllCatFactsRouteSchema: FastifySchema = {
	description: "All cat facts",
	tags: ["Cats"],
	summary: "Get all cat facts",
	response: {
		200: {
			description: "Successful response",
			type: "array",
			items: {
				type: "object",
				properties: {
					fact: {type: "string"},
					nb_chars: {type: "number"}
				}
			}
		}
	}
};

export const getOneRandomCatFactRouteSchema: FastifySchema = {
	description: "One random cat fact",
	tags: ["Cats"],
	summary: "Get one random cat fact",
	response: {
		200: {
			description: "Successful response",
			type: "object",
			properties: {
				fact: {type: "string"},
				nb_chars: {type: "number"}
			}
		}
	}
};
