import { Request, Response } from 'express';

import TransactionService from '@services/transaction/TransactionService';

class TransactionController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { amount } = req.body;
    const { type } = req.headers;

    try {
      await TransactionService.process(amount, type);
    } catch {
      res.status(500).send();
    }

    return res.status(200).send();
  }
}

export default new TransactionController();
