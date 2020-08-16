import Handler from '../Handler';
import { IAccount } from '@interfaces/IAccount';
import { Transaction, ITransaction } from '@interfaces/ITransaction';

class RescueHandler extends Handler {
  public process(account: IAccount, transaction: ITransaction): number {
    if (transaction.type === Transaction.Rescue) {
      return account.balance - transaction.amount;
    }

    return super.process(account, transaction);
  }
}

export default new RescueHandler();
