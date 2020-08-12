import { Router } from 'express';

import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.post('/transactions', TransactionController.execute);

export default routes;
