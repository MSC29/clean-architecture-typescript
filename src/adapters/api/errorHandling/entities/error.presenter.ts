import {BasePresenterEntity} from "domain/base/base.presenter.entity";

export interface ErrorPresenter extends BasePresenterEntity {
	statusCode: number;
	message: string;
}
