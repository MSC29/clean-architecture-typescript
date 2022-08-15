import {BasePresenter} from "adapters/api/shared/presenters/base.presenter";

export interface ManagedPresenter extends BasePresenter {
	enabled: boolean;
}
