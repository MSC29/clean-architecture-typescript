import {BasePresenterEntity} from 'domain/base/base.presenter.entity';

export interface ListPresenter<T extends BasePresenterEntity> {
	list: T;
}
