interface AssetDetails {
    symbol: string | null;
    price: number | null;
    current_balance: number;
}

interface Asset {
    name: string;
    type: string;
    cost: number | null;
    return: number;
    quantity: number | null;
    currency: string;
    details: AssetDetails;
}

export interface AssetResponse {
    status: string;
    message: string;
    timestamp: string;
    data: {
        id: string;
        balances: {
            _u_s_d: number;
        };
        assets: Asset[];
    };
}
