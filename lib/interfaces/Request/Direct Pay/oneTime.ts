export interface InitiatePaymentRequest {
    amount: number;
    type: 'onetime-debit';
    method: 'account' | 'transfer';
    description: string;
    reference: string;
    redirect_url: string;
    customer: {
        email: string;
        phone: string;
        address: string;
        identity: {
            type: 'bvn';
            number: string;
        };
        name: string;
    };
    meta: {};
}