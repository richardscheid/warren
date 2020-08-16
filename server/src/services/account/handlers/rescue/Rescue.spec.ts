import { Transaction } from '@interfaces/ITransaction';
import { AccountBuilder } from '@builders/AccountBuilder';
import { TransactionBuilder } from '@builders/TransactionBuilder';

import DepositHandler from './Rescue';

describe('Make a deposit', () => {
  it('should make a deposit', () => {
    const account = new AccountBuilder().balance(50).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Rescue)
      .amount(40)
      .build();

    const balance = DepositHandler.process(account, transaction);

    expect(balance).toBe(10);
  });
});
