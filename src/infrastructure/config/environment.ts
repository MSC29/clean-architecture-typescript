// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schema: any = {
	type: "object",
	required: ["DATABASE_NAME", "DATABASE_USERNAME", "DATABASE_PASSWORD", "CATS_SOURCE"],
	properties: {
		DATABASE_NAME: {
			type: "string",
			default: ""
		},
		DATABASE_USERNAME: {
			type: "string",
			default: ""
		},
		DATABASE_PASSWORD: {
			type: "string",
			default: ""
		},
		CATS_SOURCE: {
			type: "string",
			default: ""
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
