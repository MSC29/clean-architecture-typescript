/* eslint-disable @typescript-eslint/indent */
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

import {BaseModelEntity} from "domain/base/base.model.entity";

@Entity({name: "cat_facts"})
export class CatFact extends BaseModelEntity {
	@Column({type: "smallint"})
	@PrimaryGeneratedColumn()
	id: number;

	@Column({length: 255, nullable: true})
	fact: string;

	@Column({type: "smallint"})
	length: number;
}
