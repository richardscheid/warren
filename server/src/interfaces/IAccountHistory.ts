import { Document } from 'mongoose';

export interface IAccountHistory extends Document {
  amount: number;
  transaction: number;
}

export enum Transaction {
  Rescue,
  Deposit,
  Payment,
}
