import { IAccount } from '@interfaces/IAccount';
import { Transaction, ITransaction } from '@interfaces/ITransaction';

interface IHandler {
  setNext(handler: IHandler): IHandler;

  process(account: IAccount, transaction: ITransaction): number;
}

export default abstract class Handler implements IHandler {
  protected nextHandler: IHandler;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  public process(account: IAccount, transaction: ITransaction): number {
    if (this.nextHandler) {
      return this.nextHandler.process(account, transaction);
    }

    return Transaction.Undefined;
  }
}
