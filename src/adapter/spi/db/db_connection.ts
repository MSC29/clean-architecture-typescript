import {Connection, EntityManager} from "typeorm";

export class DbConnection {
	private db_driver: Connection;

	constructor(db_driver: Connection) {
		this.db_driver = db_driver;
	}

	// TODO harmonize names
	public getManager(): EntityManager {
		return this.db_driver.manager;
	}
}
