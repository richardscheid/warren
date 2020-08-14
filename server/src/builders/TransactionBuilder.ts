import { ITransaction } from '@interfaces/ITransaction';

export class TransactionBuilder {
  private readonly _transaction: ITransaction = {} as ITransaction;

  type(type: number): TransactionBuilder {
    this._transaction.type = type;
    return this;
  }

  amount(amount: number): TransactionBuilder {
    this._transaction.amount = amount;
    return this;
  }

  build(): ITransaction {
    return this._transaction;
  }
}
