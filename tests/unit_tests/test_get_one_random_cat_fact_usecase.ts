/* eslint-disable max-len */
import {expect} from "chai";
import {describe, it} from "mocha";
import {StubbedInstance} from "ts-sinon";

import {TestUnitRepositoriesUtils} from "../utils/repositories_utils";
import {GetOneRandomCatFactUseCase} from "application/usecases/get_one_random_cat_fact_usecase";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

describe("Usecase: Get one random cat fact", () => {
	it("should return generic message when unexpected repo exception", async () => {
		// given the "one random cat fact" usecase repo with an unexpected exception
		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepositoryUnexpectedExceptions();

		// when calling usecase
		const getAllCatFactsUseCase: GetOneRandomCatFactUseCase = new GetOneRandomCatFactUseCase(catFactRepository);

		// then exception
		await expect(getAllCatFactsUseCase.execute()).to.be.rejectedWith("Cannot get random cat fact");
	});

	it("should return custom message when expected repo exception", async () => {
		// given the "one random cat fact" usecase repo raising with an expected ApiException
		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepositoryExpectedExceptions();

		// when calling usecase
		const getAllCatFactsUseCase: GetOneRandomCatFactUseCase = new GetOneRandomCatFactUseCase(catFactRepository);

		// then exception
		await expect(getAllCatFactsUseCase.execute()).to.be.rejectedWith("exception in repo");
	});

	it("should return one result", async () => {
		// given the "one random cat fact" usecase repo returning one result
		const catFact: CatFactEntity = new CatFactEntity();
		catFact.factLength = 1;
		catFact.factTxt = "fact1";

		const catFactRepository: StubbedInstance<CatFactsRepositoryAbstract> = TestUnitRepositoriesUtils.createCatFactsRepository([catFact]);

		// when calling usecase
		const getAllCatFactsUseCase: GetOneRandomCatFactUseCase = new GetOneRandomCatFactUseCase(catFactRepository);
		const data: CatFactEntity = await getAllCatFactsUseCase.execute();

		// then assert the result is the expected entity
		expect(data.factTxt).to.be.equal("fact1");
		expect(data.factLength).to.be.equal(1);
	});
});
