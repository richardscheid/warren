import Account from '@models/Account';
import Transaction from '@models/Transaction';
import AccountService from '@services/account/AccountService';

import { IAccount } from '@interfaces/IAccount';
import { ITransaction } from '@interfaces/ITransaction';
import { TransactionBuilder } from '@builders/TransactionBuilder';

class TransactionService {
  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  async findAll() {
    return await Transaction.find();
  }

  async process(amount: any, type: any): Promise<ITransaction> {
    const transaction: ITransaction = this.createTransaction(amount, type);

    let account = await Account.findOne();

    if (!account) account = await Account.create(<IAccount>{ balance: 999.99 });

    this.executeTransaction(account, transaction);

    return await this.saveTransaction(transaction);
  }

  private async executeTransaction(account: IAccount, trn: ITransaction) {
    const balanceToUpdate = this.accountService.execute(account, trn);

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
