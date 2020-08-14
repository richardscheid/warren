import RescueHandler from './handlers/rescue/Rescue';
import PaymentHandler from './handlers/payment/Payment';
import DepositHandler from './handlers/deposit/Deposit';

import { IAccount } from '@interfaces/IAccount';
import { ITransaction } from '@interfaces/ITransaction';

export default class AccountControl {
  private rescue: RescueHandler;
  private payment: PaymentHandler;
  private deposit: DepositHandler;

  constructor() {
    this.rescue = new RescueHandler();
    this.payment = new PaymentHandler();
    this.deposit = new DepositHandler();

    this.rescue.setNext(this.payment);
    this.payment.setNext(this.deposit);
  }

  execute(account: IAccount, transaction: ITransaction): number {
    return this.rescue.process(account, transaction);
  }
}
