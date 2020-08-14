import { Schema, model } from 'mongoose';
import { IAccount } from '@interfaces/IAccount';

const AccountSchema = new Schema(
  {
    balance: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<IAccount>('Account', AccountSchema);
