import { Transaction } from '@interfaces/ITransaction';
import { AccountBuilder } from '@builders/AccountBuilder';
import { TransactionBuilder } from '@builders/TransactionBuilder';

import RescueHandler from './Rescue';

describe('Make a rescue', () => {
  it('should make a rescue', () => {
    const account = new AccountBuilder().balance(50).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Rescue)
      .amount(40)
      .build();

    const balance = RescueHandler.process(account, transaction);

    expect(balance).toBe(10);
  });
});
