import { Document } from 'mongoose';

export interface IAccount extends Document {
  balance: number;
}
