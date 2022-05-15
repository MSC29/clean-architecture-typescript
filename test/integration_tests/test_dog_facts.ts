/* eslint-disable max-len */
import {expect} from "chai";
import {Response} from "light-my-request";
import {describe, it} from "mocha";

import {TestResponseUtils} from "../utils/response_utils";
import {TestRequestUtils} from "../utils/request_utils";
import {DogFactPresenter} from "adapters/api/dog_facts/dog_facts_presenters";

describe("API: Dog Facts", () => {
	const urlApi: string = "api/v1";
	const urlDogFacts: string = "/dogs";

	it("should return multiple results", async () => {
		// given the "all dog facts" route
		const url: string = `${urlApi}${urlDogFacts}/`;

		// when getting
		const response: Response = await TestRequestUtils.getRequest(url);

		// then expect 3 results (inserted in db)
		const data: DogFactPresenter[] = TestResponseUtils.checkResponseOk(response);

		expect(data.length).to.be.equal(3);
		expect(data[0].txt).to.be.equal("Forty-five percent of U.S. dogs sleep in their owner's bed");
		expect(data[0].fact_id).to.be.equal(1);
	});

	it("should return one result only", async () => {
		// given the "single dog facts" route
		const dogFactId: number = 2;
		const url: string = `${urlApi}${urlDogFacts}/${dogFactId}`;

		// when getting
		const response: Response = await TestRequestUtils.getRequest(url);

		// then expect 1 result (id 2 inserted in db)
		const data: DogFactPresenter = TestResponseUtils.checkResponseOk(response);

		expect(data.txt).to.be.equal("Seventy percent of people sign their dog's name on their holiday cards");
		expect(data.fact_id).to.be.equal(2);
	});
});
