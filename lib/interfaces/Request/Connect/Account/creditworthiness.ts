export interface CreditWorthinessRequest {
    bvn: string;
    principal: number;
    interest_rate: number;
    term: number;
    run_credit_check: boolean;
}
