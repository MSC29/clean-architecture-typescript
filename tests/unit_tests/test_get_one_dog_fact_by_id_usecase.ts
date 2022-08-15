/* eslint-disable max-len */
import {expect} from "chai";
import {describe, it} from "mocha";
import {StubbedInstance} from "ts-sinon";

import {TestUnitRepositoriesUtils} from "../utils/repositories_utils";
import {GetOneDogFactByIdUseCase} from "application/usecases/get_one_dog_fact_by_id_usecase";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

describe("Usecase: Get one dog fact by id", () => {
	it("should return generic message when unexpected repo exception", async () => {
		// given the "one dog fact by id" usecase repo with an unexpected exception
		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepositoryUnexpectedExceptions();

		// when calling usecase
		const getAllDogFactsUseCase: GetOneDogFactByIdUseCase = new GetOneDogFactByIdUseCase(1, dogFactRepository);

		// then exception
		await expect(getAllDogFactsUseCase.execute()).to.be.rejectedWith("Cannot get single dog fact");
	});

	it("should return custom message when expected repo exception", async () => {
		// given the "one dog fact by id" usecase repo raising with an expected ApiException
		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepositoryExpectedExceptions();

		// when calling usecase
		const getAllDogFactsUseCase: GetOneDogFactByIdUseCase = new GetOneDogFactByIdUseCase(1, dogFactRepository);

		// then exception
		await expect(getAllDogFactsUseCase.execute()).to.be.rejectedWith("exception in repo");
	});

	it("should return list", async () => {
		// given the "one dog fact by id" usecase repo returning one result
		const dogFact: DogFactEntity = new DogFactEntity();
		dogFact.factId = 1;
		dogFact.fact = "fact1";

		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepository([dogFact]);

		// when calling usecase
		const getAllDogFactsUseCase: GetOneDogFactByIdUseCase = new GetOneDogFactByIdUseCase(1, dogFactRepository);
		const data: DogFactEntity = await getAllDogFactsUseCase.execute();

		// then assert the result is the expected entity
		expect(data.factId).to.be.equal(1);
		expect(data.fact).to.be.equal("fact1");
	});
});
