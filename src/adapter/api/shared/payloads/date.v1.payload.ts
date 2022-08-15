import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export interface DatePayload extends BasePayloadEntity {
	date: string;
}
