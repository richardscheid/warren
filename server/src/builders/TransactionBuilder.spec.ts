import { TransactionBuilder } from './TransactionBuilder';
import { Transaction } from '../interfaces/ITransaction';

describe('Transaction builder', () => {
  it('should create a payment transaction', () => {
    const transaction = new TransactionBuilder()
      .amount(10)
      .type(Transaction.Payment)
      .build();

    expect(transaction).not.toBeNull();
    expect(transaction.amount).toBe(10);
    expect(transaction.type).toBe(Transaction.Payment);
  });
});
