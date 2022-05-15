/* eslint-disable @typescript-eslint/indent */
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

import {BaseModelEntity} from "domain/base/base.model.entity";

@Entity({name: "dog_facts"})
export class DogFact extends BaseModelEntity {
	@Column({type: "smallint"})
	@PrimaryGeneratedColumn()
	id: number;

	@Column({length: 255, nullable: true})
	fact: string;
}
