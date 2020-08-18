import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.DB_URI;
const PORT = process.env.PORT;

if (!URI) {
  throw new Error('Set DB_URI environment variable.');
}

if (!PORT) {
  throw new Error('Set PORT environment variable.');
}

export const MONGODB_URI: string = URI;
export const SERVER_PORT: string = PORT;
