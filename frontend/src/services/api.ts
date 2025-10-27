import axios from 'axios';
import { Auction, User } from '../types';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

export const fetchAuctions = async (): Promise<Auction[]> => {
  try {
    const response = await api.get('/auctions');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching auctions: ' + error.message);
  }
};

export const fetchAuctionDetails = async (id: string): Promise<Auction> => {
  try {
    const response = await api.get(`/auctions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching auction details for id: ${id}: ` + error.message);
  }
};

export const placeBid = async (auctionId: string, bidAmount: number): Promise<any> => {
  try {
    const response = await api.post(`/auctions/${auctionId}/bids`, { amount: bidAmount });
    return response.data;
  } catch (error) {
    throw new Error('Error placing bid: ' + error.message);
  }
};

export const getUserProfile = async (userId: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user profile: ' + error.message);
  }
};

export const purchaseCrocos = async (amount: number): Promise<any> => {
  try {
    const response = await api.post('/payments/crocos', { amount });
    return response.data;
  } catch (error) {
    throw new Error('Error purchasing Crocos: ' + error.message);
  }
};