// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
	type: "object",
	required: ["DATABASE_NAME", "DATABASE_URL", "CATS_SOURCE"],
	properties: {
		DATABASE_NAME: {
			type: "string",
			default: ""
		},
		DATABASE_URL: {
			type: "string",
			default: ""
		},
		CATS_SOURCE: {
			type: "string",
			default: ""
		},
		DB_LOGGING: {
			type: "boolean",
			default: false
		},
		DEBUG_LEVEL: {
			type: "string",
			default: "error"
		}
	}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const envOptions: any = {
	schema,
	dotenv: {
		path: `.env.${process.env.ENV}`
	}
};
