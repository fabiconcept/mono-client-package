export interface AccountLinkingResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        mono_url: string;
        customer: string;
        meta: {
            ref: string;
        };
        scope: string;
        redirect_url: string;
        created_at: string;
    };
}
  