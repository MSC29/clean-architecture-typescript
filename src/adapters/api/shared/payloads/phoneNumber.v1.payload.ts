import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export interface PhoneNumberPayload extends BasePayloadEntity {
	countryCode: string;
	phoneNumber: string;
	dtmf: string;
}
