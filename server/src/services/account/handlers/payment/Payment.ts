import Handler from '../Handler';
import { IAccount } from '@interfaces/IAccount';
import { Transaction, ITransaction } from '@interfaces/ITransaction';

export default class PaymentHandler extends Handler {
  public process(account: IAccount, transaction: ITransaction): number {
    if (transaction.type === Transaction.Payment) {
      console.log('PAYMENT');
      return account.balance - transaction.amount;
    }

    return super.process(account, transaction);
  }
}
