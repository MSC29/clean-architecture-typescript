import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export interface PasswordPayload extends BasePayloadEntity {
	password: string;
}
