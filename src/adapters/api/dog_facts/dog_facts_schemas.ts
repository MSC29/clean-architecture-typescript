import {FastifySchema} from "fastify";

export const getAllDogFactsRouteSchema: FastifySchema = {
	description: "All dog facts",
	tags: ["Dogs"],
	summary: "Get all dog facts",
	response: {
		200: {
			description: "Successful response",
			type: "object",
			properties: {
				list: {
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
		}
	}
};

export const getOneDogFactByIdRouteSchema: FastifySchema = {
	description: "One dog fact by id",
	tags: ["Dogs"],
	summary: "Get one dog fact by id",
	response: {
		200: {
			description: "Successful response",
			type: "object",
			properties: {
				fact_id: {type: "number"},
				txt: {type: "string"}
			}
		}
	}
};
