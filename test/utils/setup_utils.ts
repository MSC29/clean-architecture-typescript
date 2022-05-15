/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import * as path from "path";
import * as YAML from "yaml";
import {Connection, getConnection, getRepository} from "typeorm";
import {Builder, fixturesIterator, IFixture, Loader, Parser, Resolver} from "typeorm-fixtures-cli/dist";

export class TestSetupUtils {
	static mapFixtures<T>(fixtureFile: string, map: Map<string, T>): void {
		const modelFixturesFile: any = fs.readFileSync(`${__dirname}/../integration_tests/fixtures/${fixtureFile}.yml`, "utf8");
		const modelFixtures: any = YAML.parse(modelFixturesFile);

		const modelItems: any = modelFixtures.items;
		const modelIds: string[] = Object.keys(modelItems);

		for (const id of modelIds) {
			const obj: T = modelItems[id];
			map.set(id, obj);
		}
	}

	static async loadFixtures(): Promise<void> {
		const connection: Connection = getConnection();

		try {
			await connection.dropDatabase();
			await connection.synchronize(true);

			const loader: Loader = new Loader();
			loader.load(path.resolve("test/integration_tests/fixtures"));

			const resolver: Resolver = new Resolver();
			const fixtures: IFixture[] = resolver.resolve(loader.fixtureConfigs);
			const builder: Builder = new Builder(connection, new Parser());

			const uniqueEntities: Set<string> = new Set();

			for (const fixture of fixturesIterator(fixtures)) {
				if (!uniqueEntities.has(fixture.entity)) {
					uniqueEntities.add(fixture.entity);
					await getRepository(fixture.entity).delete({});
				}
				const entity: any = await builder.build(fixture);
				await getRepository(entity.constructor.name).insert(entity);
			}
		} catch (err: unknown) {
			console.error(err);
			throw Error("cannot load fixtures");
		}
	}
}
