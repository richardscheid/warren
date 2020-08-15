import Account from '@models/Account';
import Transaction from '@models/Transaction';
import AccountService from '@services/account/AccountService';

import { IAccount } from '@interfaces/IAccount';
import { ITransaction } from '@interfaces/ITransaction';
import { TransactionBuilder } from '@builders/TransactionBuilder';

class TransactionService {
  async findAll() {
    return await Transaction.find().sort({ createdAt: 'desc' });
  }

  async process(amount: any, type: any): Promise<ITransaction> {
    const account = await Account.findOne();
    const transaction: ITransaction = this.createTransaction(amount, type);

    this.executeTransaction(account, transaction);

    return await this.saveTransaction(transaction);
  }

  private async executeTransaction(account: IAccount, trn: ITransaction) {
    const balanceToUpdate = AccountService.execute(account, trn);

    const filter = { _id: account._id };
    const update = <IAccount>{ balance: balanceToUpdate };

    await Account.updateOne(filter, update);
  }

  private createTransaction(amount: any, type: any) {
    return new TransactionBuilder().type(type).amount(amount).build();
  }

  private async saveTransaction(transaction: ITransaction) {
    return await Transaction.create(transaction);
  }
}

export default new TransactionService();
