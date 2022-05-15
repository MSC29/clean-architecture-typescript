import {FastifyReply, FastifyInstance, FastifyRequest} from "fastify";

import {ErrorHandlingPresenter} from "adapters/api/errorHandling/utils/errorHandling.presenter";
import {CatFactPresenterMapper} from "adapters/api/cat_facts/cat_facts_mappers";
import {CatFactPresenter} from "adapters/api/cat_facts//cat_facts_presenters";
import {GetAllCatFactsUseCase} from "application/usecases/get_all_cat_facts_usecase";
import {GetOneRandomCatFactUseCase} from "application/usecases/get_one_random_cat_fact_usecase";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

const getAllCatFactsRouteSchema = async (req: FastifyRequest, reply: FastifyReply, server: FastifyInstance): Promise<void> => {
	try {
		const catFactPresenterMapper: CatFactPresenterMapper = new CatFactPresenterMapper();

		const getAllCatFactsUseCase: GetAllCatFactsUseCase = new GetAllCatFactsUseCase(server.catFactsRepository);
		const catFacts: CatFactEntity[] = await getAllCatFactsUseCase.execute();

		const catFactsPresenter: CatFactPresenter[] = [];
		catFacts.forEach((catFact: CatFactEntity) => catFactsPresenter.push(catFactPresenterMapper.toApi(catFact)));

		void reply.send(catFactsPresenter);
	} catch (err: unknown) {
		throw ErrorHandlingPresenter.createApplicationError(err);
	}
};

const getOneRandomCatFactRouteSchema = async (req: FastifyRequest, reply: FastifyReply, server: FastifyInstance): Promise<void> => {
	try {
		const catFactPresenterMapper: CatFactPresenterMapper = new CatFactPresenterMapper();

		const getOneRandomCatFactUseCase: GetOneRandomCatFactUseCase = new GetOneRandomCatFactUseCase(server.catFactsRepository);
		const catFact: CatFactEntity = await getOneRandomCatFactUseCase.execute();

		void reply.send(catFactPresenterMapper.toApi(catFact));
	} catch (err: unknown) {
		throw ErrorHandlingPresenter.createApplicationError(err);
	}
};

export default {getAllCatFactsRouteSchema, getOneRandomCatFactRouteSchema};
