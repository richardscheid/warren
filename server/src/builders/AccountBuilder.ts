import { IAccount } from '../interfaces/IAccount';

export class AccountBuilder {
  private readonly account: IAccount = {} as IAccount;

  balance(amount: any): AccountBuilder {
    this.account.balance = Number(amount);
    return this;
  }

  build(): IAccount {
    return this.account;
  }
}
