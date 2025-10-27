export type Product = {
    id: string;
    name: string;
    description: string;
    marketValue: number;
    cogs: number;
    reservePrice: number;
    currentBid: number;
    bidsCount: number;
    auctionId: string;
};

export type Auction = {
    id: string;
    productId: string;
    startTime: Date;
    endTime: Date;
    currentPrice: number;
    bids: Bid[];
    status: 'waiting' | 'active' | 'finished';
};

export type Bid = {
    id: string;
    userId: string;
    auctionId: string;
    amount: number;
    timestamp: Date;
};

export type User = {
    id: string;
    username: string;
    email: string;
    crocosBalance: number;
    storeCredit: number;
};

export type Payment = {
    id: string;
    userId: string;
    amount: number;
    timestamp: Date;
    method: 'credit_card' | 'paypal' | 'crocos';
};