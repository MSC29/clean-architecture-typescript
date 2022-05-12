import {Connection, EntityManager} from "typeorm";

export class DbConnection {
	private connection: Connection;

	constructor(connection: Connection) {
		this.connection = connection;
	}

	// TODO harmonize names
	public getManager(): EntityManager {
		return this.connection.manager;
	}
}
