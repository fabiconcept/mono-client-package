export interface AccountReauthorizationRequest {
    meta?: {
        ref: string;
    };
    scope: string;
    account: string;
    redirect_url: string;
}
