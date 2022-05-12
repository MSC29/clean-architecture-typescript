import {BasePresenterEntity} from "domain/base/base.presenter.entity";

export interface CatFactPresenter extends BasePresenterEntity {
	fact: string;
	nb_chars: number;
}
