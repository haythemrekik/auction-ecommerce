#!/bin/bash

# Start the backend server
cd backend
npm install
npm run start &

# Start the frontend server
cd ../frontend
npm install
npm run dev &

# Wait for both servers to start
wait

echo "Local development environment started."