import {BasePresenterEntity} from "domain/base/base.presenter.entity";

export interface DogFactPresenter extends BasePresenterEntity {
	fact_id: number;
	txt: string;
}
