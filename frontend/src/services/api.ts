import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

// Example API call to get auctions
export const fetchAuctions = async () => {
  try {
    const response = await api.get('/auctions');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching auctions: ' + error.message);
  }
};

// Example API call to place a bid
export const placeBid = async (auctionId, bidAmount) => {
  try {
    const response = await api.post(`/auctions/${auctionId}/bids`, { amount: bidAmount });
    return response.data;
  } catch (error) {
    throw new Error('Error placing bid: ' + error.message);
  }
};

// Example API call to get user profile
export const fetchUserProfile = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user profile: ' + error.message);
  }
};

// Example API call to purchase Crocos
export const purchaseCrocos = async (amount) => {
  try {
    const response = await api.post('/payments/crocos', { amount });
    return response.data;
  } catch (error) {
    throw new Error('Error purchasing Crocos: ' + error.message);
  }
};