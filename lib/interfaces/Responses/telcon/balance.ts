interface Bundle {
    _id: string;
    name: string;
    type: 'currency' | 'voice' | 'data';
    value: number;
    unit: 'ngn' | 'minutes' | 'gb';
}

export interface BalancesResponse {
    bundles: Bundle[];
}