interface AssetDetails {
    symbol: string;
    name: string;
    sale_price: number;
    quantity_sold: number;
}

interface EarningsData {
    id: string;
    amount: number;
    narration: string;
    date: string;
    asset: AssetDetails;
}

export interface EarningsResponse {
    status: string;
    message: string;
    timestamp: string;
    data: EarningsData[];
}
