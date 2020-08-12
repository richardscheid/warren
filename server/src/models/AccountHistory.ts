import { Schema, model } from 'mongoose';
import { IAccountHistory } from '../interfaces/IAccountHistory';

const AccountHistorySchema = new Schema(
  {
    type: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<IAccountHistory>('Account', AccountHistorySchema);
