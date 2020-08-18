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

    const result = DepositHandler.process(account, transaction);

    expect(result).toBe(20);
  });

  it('it should validate the transaction type and not execute', () => {
    const account = new AccountBuilder().balance(10).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Payment)
      .amount(10)
      .build();

    const result = DepositHandler.process(account, transaction);

    expect(result).toBe(Transaction.Undefined);
  });
});
