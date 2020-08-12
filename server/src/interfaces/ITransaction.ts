import { Document } from 'mongoose';

export interface ITransaction extends Document {
  type: number;
  amount: number;
}

export enum Transaction {
  Rescue,
  Deposit,
  Payment,
}
