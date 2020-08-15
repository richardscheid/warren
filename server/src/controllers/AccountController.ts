import { Request, Response } from 'express';

import AccountService from '@services/account/AccountService';

class TransactionController {
  async find(req: Request, res: Response): Promise<Response> {
    const account = await AccountService.findOne();

    return res.json(account);
  }
}

export default new TransactionController();
