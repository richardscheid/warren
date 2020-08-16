import { Transaction } from '@interfaces/ITransaction';
import { AccountBuilder } from '@builders/AccountBuilder';
import { TransactionBuilder } from '@builders/TransactionBuilder';

import DepositHandler from './Deposit';

describe('Make a deposit', () => {
  it('should make a deposit', () => {
    const account = new AccountBuilder().balance(10).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Deposit)
      .amount(10)
      .build();

    const balance = DepositHandler.process(account, transaction);

    expect(balance).toBe(20);
  });
});
