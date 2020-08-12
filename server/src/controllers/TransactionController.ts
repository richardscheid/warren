import { Request, Response } from 'express';

class TransactionController {
  public async execute(req: Request, res: Response): Promise<Response> {
    return res.json();
  }
}

export default new TransactionController();
