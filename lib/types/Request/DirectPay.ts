import { FixedMandateBodyParams, FixedMandateRequest, VariableMandateBodyParams, VariableMandateRequest } from "../../interfaces/Request/Direct Pay/recurring";

export type InitiateMandateAuthorizationRequest = VariableMandateBodyParams | FixedMandateBodyParams;
export type CreateMandateRequest = FixedMandateRequest | VariableMandateRequest;