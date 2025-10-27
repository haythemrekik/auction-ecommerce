# Auction E-commerce Backend

## Description
This backend application is designed to support a competitive auction e-commerce platform. It provides the necessary APIs and services to manage auctions, products, users, and payments, while ensuring real-time updates through WebSocket connections.

## Features
- **Auction Management**: Create, update, and retrieve auction details.
- **Product Management**: Add and manage products available for auction.
- **User Management**: Handle user registration, authentication, and profiles.
- **Payment Processing**: Securely process payments and manage user credits.
- **Real-time Updates**: Utilize WebSocket connections for live auction updates.

## Technologies Used
- TypeScript
- Node.js
- Express.js
- Prisma (for database interactions)
- WebSocket (for real-time communication)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd auction-ecommerce/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the environment variables by copying the `.env.example` to `.env` and updating the values as needed.

## Running the Application
To start the backend server, run:
```
npm run start
```

## API Documentation
Refer to the individual controller files for detailed API endpoints and usage.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.