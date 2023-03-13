import {HttpConnection} from "adapter/spi/http/http_connection";
import {DbConnection} from "adapter/spi/db/db_connection";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {ConfigEnvironment} from "adapter/spi/shared/environment.interface";

declare module "fastify" {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export interface FastifyInstance {
		config: ConfigEnvironment;
		dbConnection: DbConnection;
		httpConnection: HttpConnection;

		dogFactsRepository: DogFactsRepositoryAbstract;
		catFactsRepository: CatFactsRepositoryAbstract;
	}
}
