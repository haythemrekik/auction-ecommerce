import { config } from 'dotenv';

config();

export const environment = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'your_default_database_url',
  JWT_SECRET: process.env.JWT_SECRET || 'your_default_jwt_secret',
  COGS: parseFloat(process.env.COGS) || 0,
  CROCOS_TO_DINAR: parseFloat(process.env.CROCOS_TO_DINAR) || 0.6,
  BNI_PERCENTAGE: parseFloat(process.env.BNI_PERCENTAGE) || 0.1,
  INCREMENT_PRICE: parseFloat(process.env.INCREMENT_PRICE) || 0.05,
};