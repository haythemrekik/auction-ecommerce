# Auction E-commerce Project

## Overview

This project is an auction-based e-commerce platform that allows users to participate in competitive bidding for various products. The platform features a unique "Buy Now Intelligent" (BNI) mechanism, enabling users to purchase items directly under certain conditions. The project is structured with a clear separation between the backend and frontend, utilizing an API-first architecture.

## Features

- **Auction Mechanism**: Users can place bids on products in real-time.
- **Buy Now Intelligent (BNI)**: Users can buy products immediately if they meet specific criteria.
- **Real-time Updates**: The application uses WebSockets to provide instant updates on auction prices and timers.
- **Credit System**: Users earn "Crocos" for participating in auctions, which can be converted into store credit.
- **E-commerce Module**: A standard e-commerce module allows users to purchase products outside of auctions using store credit.

## Project Structure

```
auction-ecommerce
├── backend                # Backend application
│   ├── src                # Source code for the backend
│   ├── package.json       # Backend dependencies and scripts
│   └── README.md          # Backend documentation
├── frontend               # Frontend application
│   ├── src                # Source code for the frontend
│   ├── package.json       # Frontend dependencies and scripts
│   └── README.md          # Frontend documentation
├── shared                 # Shared components and types
│   └── README.md          # Shared documentation
├── infra                  # Infrastructure configuration
│   ├── docker-compose.yml  # Docker services configuration
│   └── Dockerfiles        # Docker configurations for backend and frontend
├── scripts                # Scripts for database seeding and local setup
├── prisma                 # Database schema and configuration
├── .env.example           # Example environment variables
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json           # Main project dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd auction-ecommerce
   ```

2. **Install Dependencies**:
   - For the backend:
     ```
     cd backend
     npm install
     ```
   - For the frontend:
     ```
     cd frontend
     npm install
     ```

3. **Run the Application**:
   - Start the backend:
     ```
     cd backend
     npm run start
     ```
   - Start the frontend:
     ```
     cd frontend
     npm run dev
     ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000` for the frontend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.