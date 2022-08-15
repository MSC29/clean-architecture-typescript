/* eslint-disable max-len */
import {expect} from "chai";
import {describe, it} from "mocha";
import {StubbedInstance} from "ts-sinon";

import {TestUnitRepositoriesUtils} from "../utils/repositories_utils";
import {GetAllDogFactsUseCase} from "application/usecases/get_all_dog_facts_usecase";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

describe("Usecase: Get all dog facts", () => {
	it("should return generic message when unexpected repo exception", async () => {
		// given the "all dog facts" usecase repo with an unexpected exception
		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepositoryUnexpectedExceptions();

		// when calling usecase
		const getAllDogFactsUseCase: GetAllDogFactsUseCase = new GetAllDogFactsUseCase(dogFactRepository);

		// then exception
		await expect(getAllDogFactsUseCase.execute()).to.be.rejectedWith("Cannot get all dog facts");
	});

	it("should return custom message when expected repo exception", async () => {
		// given the "all dog facts" usecase repo raising with an expected ApiException
		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepositoryExpectedExceptions();

		// when calling usecase
		const getAllDogFactsUseCase: GetAllDogFactsUseCase = new GetAllDogFactsUseCase(dogFactRepository);

		// then exception
		await expect(getAllDogFactsUseCase.execute()).to.be.rejectedWith("exception in repo");
	});

	it("should return empty list", async () => {
		// given the "all dog facts" usecase repo returning an empty list
		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepository([]);

		// when calling usecase
		const getAllDogFactsUseCase: GetAllDogFactsUseCase = new GetAllDogFactsUseCase(dogFactRepository);
		const data: DogFactEntity[] = await getAllDogFactsUseCase.execute();

		// then assert the result is an empty list
		expect(data.length).to.be.equal(0);
	});

	it("should return list", async () => {
		// given the "all dog facts" usecase repo returning a list of 2 entities
		const dogFact1: DogFactEntity = new DogFactEntity();
		dogFact1.factId = 1;
		dogFact1.fact = "fact1";
		const dogFact2: DogFactEntity = new DogFactEntity();
		dogFact2.factId = 2;
		dogFact2.fact = "fact2";
		const dogFacts: DogFactEntity[] = [dogFact1, dogFact2];

		const dogFactRepository: StubbedInstance<DogFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createDogFactsRepository(dogFacts);

		// when calling usecase
		const getAllDogFactsUseCase: GetAllDogFactsUseCase = new GetAllDogFactsUseCase(dogFactRepository);
		const data: DogFactEntity[] = await getAllDogFactsUseCase.execute();

		// then assert the result is an empty list
		expect(data.length).to.be.equal(2);
	});
});
