export interface User {
  id: string;
  name: string;
  email: string;
  credits: number;
}

export interface Auction {
  id: string;
  productName: string;
  productImage: string;
  marketValue: number;
}
