/* eslint-disable max-classes-per-file */
import {BaseHttpResponseEntity} from "domain/base/base.spiResponse.entity";

export class CatFactsApiModel extends BaseHttpResponseEntity {
	current_page: number;
	data: CatFactApiModel[];
}

export class CatFactApiModel extends BaseHttpResponseEntity {
	fact: string;
	length: number;
}
