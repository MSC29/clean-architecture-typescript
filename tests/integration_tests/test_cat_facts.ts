/* eslint-disable max-len */
import {expect} from "chai";
import {Response} from "light-my-request";
import {describe, it} from "mocha";

import {TestResponseUtils} from "../utils/response_utils";
import {TestRequestUtils} from "../utils/request_utils";
import {CatFactPresenter} from "adapters/api/cat_facts/cat_facts_presenters";

describe("API: Cat Facts", () => {
	const urlApi: string = "api/v1";
	const urlCatFacts: string = "/cats";

	it("should return multiple results", async () => {
		// given the "all cat facts" route
		const url: string = `${urlApi}${urlCatFacts}/`;

		// when getting
		const response: Response = await TestRequestUtils.getRequest(url);

		// then expect entire list
		const data: CatFactPresenter[] = TestResponseUtils.checkResponseOk(response);

		expect(data.length).to.be.equal(10);
		expect(data[0].fact).to.be.equal("The first true cats came into existence about 12 million years ago and were the Proailurus.");
		expect(data[0].nb_chars).to.be.equal(91);
	});

	it("should return one result only", async () => {
		// given the "random cat fact" route
		const url: string = `${urlApi}${urlCatFacts}/random`;

		// when getting
		const response: Response = await TestRequestUtils.getRequest(url);

		// then expect 1 only
		const data: CatFactPresenter = TestResponseUtils.checkResponseOk(response);

		expect(data.fact).to.be.equal(
			"In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white."
		);
		expect(data.nb_chars).to.be.equal(315);
	});
});
