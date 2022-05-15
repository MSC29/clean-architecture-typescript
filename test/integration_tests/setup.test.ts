import {before} from "mocha";

import server from "infrastructure/app";

import {TestSetupUtils} from "../utils/setup_utils";

before(async () => {
	await server.ready();
	await TestSetupUtils.loadFixtures();
});
