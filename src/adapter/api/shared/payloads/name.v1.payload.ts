import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export interface NamePayload extends BasePayloadEntity {
	name: string;
}
