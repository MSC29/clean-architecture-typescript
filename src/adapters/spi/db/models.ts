import {Entity, Column} from "typeorm";

import {BaseModelEntity} from "domain/base/base.model.entity";

@Entity({name: "dog_facts"})
export class DogFact extends BaseModelEntity {
	@Column({type: "smallint"})
	id: number;

	@Column({length: 255, nullable: true})
	fact: string;
}
