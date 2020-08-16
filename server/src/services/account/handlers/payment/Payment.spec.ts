import { Transaction } from '@interfaces/ITransaction';
import { AccountBuilder } from '@builders/AccountBuilder';
import { TransactionBuilder } from '@builders/TransactionBuilder';

import PaymentHandler from './Payment';

describe('Make a payment', () => {
  it('should make a payment', () => {
    const account = new AccountBuilder().balance(20).build();
    const transaction = new TransactionBuilder()
      .type(Transaction.Payment)
      .amount(10)
      .build();

    const balance = PaymentHandler.process(account, transaction);

    expect(balance).toBe(10);
  });
});
