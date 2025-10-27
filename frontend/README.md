# Auction E-commerce Frontend

This is the frontend part of the Auction E-commerce project, built using Next.js. The application allows users to participate in competitive auctions and manage their profiles and wallets.

## Features

- **Real-time Auction Updates**: Users can see live updates of auction prices and timers using WebSockets.
- **User Authentication**: Secure login and registration process for users.
- **Bid Management**: Users can place bids on auctions and track their progress towards BNI (Buy Now Intelligent) eligibility.
- **Wallet System**: Users can purchase Crocos and manage their wallet balance.
- **Credit Store**: Users can convert their Crocos into store credit after losing an auction.

## Project Structure

- **src/pages**: Contains the main pages of the application.
  - `index.tsx`: Homepage.
  - `auction/[id].tsx`: Auction details page.
  - `profile.tsx`: User profile page.
  
- **src/components**: Contains reusable components.
  - `AuctionView.tsx`: Displays auction details and current bids.
  - `BniGauge.tsx`: Visual representation of BNI eligibility.
  - `BidButton.tsx`: Button for placing bids.
  - `WalletWidget.tsx`: Displays user's Crocos balance.

- **src/hooks**: Custom hooks for managing state and side effects.
  - `useRealtime.ts`: Hook for real-time updates.

- **src/services**: API service for making requests to the backend.
  - `api.ts`: Functions for API calls.

- **src/contexts**: Context API for managing global state.
  - `AuthContext.tsx`: Manages user authentication state.

- **src/styles**: Global styles for the application.
  - `globals.css`: Contains global CSS styles.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd auction-ecommerce/frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.