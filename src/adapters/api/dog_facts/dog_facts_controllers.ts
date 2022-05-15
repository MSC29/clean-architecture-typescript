import {FastifyReply, FastifyInstance, FastifyRequest} from "fastify";

import {ErrorHandlingPresenter} from "adapters/api/errorHandling/utils/errorHandling.presenter";
import {DogFactPresenterMapper} from "adapters/api/dog_facts/dog_facts_mappers";
import {DogFactPresenter} from "adapters/api/dog_facts/dog_facts_presenters";
import {DogFactRequest} from "adapters/api/dog_facts/dog_facts_requests";
import {GetAllDogFactsUseCase} from "application/usecases/get_all_dog_facts_usecase";
import {GetOneDogFactByIdUseCase} from "application/usecases/get_one_dog_fact_by_id_usecase";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

const getAllDogFactsRouteSchema = async (req: FastifyRequest, reply: FastifyReply, server: FastifyInstance): Promise<void> => {
	try {
		const dogFactPresenterMapper: DogFactPresenterMapper = new DogFactPresenterMapper();

		const getAllDogFactsUseCase: GetAllDogFactsUseCase = new GetAllDogFactsUseCase(server.dogFactsRepository);
		const dogFacts: DogFactEntity[] = await getAllDogFactsUseCase.execute();

		const dogFactsPresenter: DogFactPresenter[] = [];
		dogFacts.forEach((dogFact: DogFactEntity) => dogFactsPresenter.push(dogFactPresenterMapper.toApi(dogFact)));

		void reply.send(dogFactsPresenter);
	} catch (err: unknown) {
		throw ErrorHandlingPresenter.createApplicationError(err);
	}
};

const getOneDogFactByIdRouteSchema = async (req: FastifyRequest<DogFactRequest>, reply: FastifyReply, server: FastifyInstance): Promise<void> => {
	try {
		const factId: number = req.params.factId;
		const dogFactPresenterMapper: DogFactPresenterMapper = new DogFactPresenterMapper();

		const getOneDogFactByIdUseCase: GetOneDogFactByIdUseCase = new GetOneDogFactByIdUseCase(factId, server.dogFactsRepository);
		const dogFact: DogFactEntity = await getOneDogFactByIdUseCase.execute();

		void reply.send(dogFactPresenterMapper.toApi(dogFact));
	} catch (err: unknown) {
		throw ErrorHandlingPresenter.createApplicationError(err);
	}
};

export default {getAllDogFactsRouteSchema, getOneDogFactByIdRouteSchema};
