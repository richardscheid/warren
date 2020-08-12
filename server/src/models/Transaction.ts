import { Schema, model } from 'mongoose';
import { ITransaction } from '../interfaces/ITransaction';

const TransactionSchema = new Schema(
  {
    type: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<ITransaction>('Transaction', TransactionSchema);
