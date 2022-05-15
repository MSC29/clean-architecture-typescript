import {BaseEntity} from "domain/base/base.entity";

export interface UseCaseInterface {
	execute(): Promise<BaseEntity | BaseEntity[] | string | number | boolean>;
}
