import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export interface EmailPayload extends BasePayloadEntity {
	email: string;
}
