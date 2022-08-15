import {BasePresenterEntity} from "domain/base/base.presenter.entity";

export interface BasePresenter extends BasePresenterEntity {
	id?: string;
	created: Date;
	updated: Date;
}
