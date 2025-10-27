# Auction E-commerce Project

This project is an auction-based e-commerce platform that allows users to participate in competitive bidding for various products. It features a unique "Buy Now Intelligent" (BNI) mechanism, enabling users to purchase items directly under certain conditions.

## Project Structure

The project is organized into several key directories:

- **backend**: Contains the server-side application, including controllers, services, and modules for handling auctions, products, and user management.
- **frontend**: Contains the client-side application built with React, providing a user-friendly interface for interacting with the auction system.
- **shared**: Contains shared types and validation logic used across both the frontend and backend.
- **infra**: Contains Docker configurations for deploying the application.
- **scripts**: Contains utility scripts for database seeding and local development.
- **prisma**: Contains the database schema and Prisma client configuration.

## Features

- **Real-time Bidding**: Users can place bids in real-time, with updates on auction status and pricing using WebSockets.
- **Credit System**: Users earn "Crocos" for participating in auctions, which can be converted into store credit.
- **User Profiles**: Users can manage their profiles, view their bidding history, and track their credits.
- **Secure Payments**: The application ensures secure payment processing and complies with relevant regulations.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up the environment variables by copying the `.env.example` file to `.env` and configuring it as needed.

5. Start the backend server:
   ```
   cd backend
   npm run start
   ```

6. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.