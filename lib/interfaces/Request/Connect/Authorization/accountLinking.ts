export interface Customer {
    name: string;
    email: string;
};

export interface AccountLinkingRequest {
    customer: Customer;
    meta?: {
        ref: string;
    };
    scope: "auth";
    redirect_url: string;
}
