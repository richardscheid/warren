import { ITransaction } from '@interfaces/ITransaction';

export class TransactionBuilder {
  private readonly _transaction: ITransaction = {} as ITransaction;

  type(type: any): TransactionBuilder {
    this._transaction.type = Number(type);
    return this;
  }

  amount(amount: any): TransactionBuilder {
    this._transaction.amount = Number(amount);
    return this;
  }

  build(): ITransaction {
    return this._transaction;
  }
}
