import {SwaggerOptions} from "@fastify/swagger";

export const swaggerOptions: SwaggerOptions = {
	routePrefix: "/docs",
	exposeRoute: true,
	swagger: {
		info: {
			title: "Animal Facts API",
			description: "clean architecture example in TypeScript",
			version: "1.0.0"
		},
		externalDocs: {
			url: "XXXXXXXXXXX",
			description: "Find more info here"
		},
		host: "localhost",
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"]
	}
};
