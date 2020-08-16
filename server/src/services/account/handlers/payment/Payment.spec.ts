import { Transaction } from '@interfaces/ITransaction';
import { AccountBuilder } from '@builders/AccountBuilder';
import { TransactionBuilder } from '@builders/TransactionBuilder';

import DepositHandler from './Payment';

describe('Make a deposit', () => {
  it('should make a deposit', () => {
    const account = new AccountBuilder().balance(20).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Payment)
      .amount(10)
      .build();

    const balance = DepositHandler.process(account, transaction);

    expect(balance).toBe(10);
  });
});
