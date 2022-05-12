import {BaseEntity} from "domain/base/base.entity";

export class CatFactEntity extends BaseEntity {
	factTxt: string;
	factLength: number;
}
