import fp from "fastify-plugin";
import {FastifyError, FastifyInstance} from "fastify";
import "reflect-metadata";

import {ConfigEnvironment} from "adapters/spi/shared/environment.interface";
import {DogFactsRepository} from "adapters/spi/db/db_dog_facts_repository";
import {CatFactsRepository} from "adapters/spi/api/http_cat_facts_repository";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default fp((server: FastifyInstance, opts: any, next: (err?: FastifyError) => void): void => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const config: ConfigEnvironment = server["config"];

		const datFactsRepository: CatFactsRepositoryAbstract = new CatFactsRepository(server.httpConnection, config.CATS_SOURCE);
		server.decorate("datFactsRepository", datFactsRepository);

		const dogFactsRepository: DogFactsRepositoryAbstract = new DogFactsRepository(server.dbConnection);
		server.decorate("dogFactsRepository", dogFactsRepository);

		return next();
	} catch (err) {
		console.error(err);
		return next(err);
	}
});
