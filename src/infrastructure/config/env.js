import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  KAFKA_BROKER: process.env.KAFKA_BROKER,
};