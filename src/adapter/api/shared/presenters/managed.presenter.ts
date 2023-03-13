import {BasePresenter} from "adapter/api/shared/presenters/base.presenter";

export interface ManagedPresenter extends BasePresenter {
	enabled: boolean;
}
