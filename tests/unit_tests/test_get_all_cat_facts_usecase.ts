/* eslint-disable max-len */
import {expect} from "chai";
import * as chai from "chai";
import {describe, it} from "mocha";
import {StubbedInstance} from "ts-sinon";
import chaiAsPromised from "chai-as-promised";

import {TestUnitRepositoriesUtils} from "../utils/repositories_utils";
import {GetAllCatFactsUseCase} from "application/usecases/get_all_cat_facts_usecase";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

chai.use(chaiAsPromised);

describe("Usecase: Get all cat facts", () => {
	it("should return generic message when unexpected repo exception", async () => {
		// given the "all cat facts" usecase repo with an unexpected exception
		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepositoryUnexpectedExceptions();

		// when calling usecase
		const getAllCatFactsUseCase: GetAllCatFactsUseCase = new GetAllCatFactsUseCase(catFactRepository);

		// then exception
		await expect(getAllCatFactsUseCase.execute()).to.be.rejectedWith("Cannot get all cat facts");
	});

	it("should return custom message when expected repo exception", async () => {
		// given the "all cat facts" usecase repo raising with an expected ApiException
		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepositoryExpectedExceptions();

		// when calling usecase
		const getAllCatFactsUseCase: GetAllCatFactsUseCase = new GetAllCatFactsUseCase(catFactRepository);

		// then exception
		await expect(getAllCatFactsUseCase.execute()).to.be.rejectedWith("exception in repo");
	});

	it("should return empty list", async () => {
		// given the "all cat facts" usecase repo returning an empty list
		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepository([]);

		// when calling usecase
		const getAllCatFactsUseCase: GetAllCatFactsUseCase = new GetAllCatFactsUseCase(catFactRepository);
		const data: CatFactEntity[] = await getAllCatFactsUseCase.execute();

		// then assert the result is an empty list
		expect(data.length).to.be.equal(0);
	});

	it("should return list", async () => {
		// given the "all cat facts" usecase repo returning a list of 2 entities
		const catFact1: CatFactEntity = new CatFactEntity();
		catFact1.factLength = 1;
		catFact1.factTxt = "fact1";
		const catFact2: CatFactEntity = new CatFactEntity();
		catFact2.factLength = 2;
		catFact2.factTxt = "fact2";
		const catFacts: CatFactEntity[] = [catFact1, catFact2];

		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepository(catFacts);

		// when calling usecase
		const getAllCatFactsUseCase: GetAllCatFactsUseCase = new GetAllCatFactsUseCase(catFactRepository);
		const data: CatFactEntity[] = await getAllCatFactsUseCase.execute();

		// then assert the result is an empty list
		expect(data.length).to.be.equal(2);
	});
});
