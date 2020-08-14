import { Router } from 'express';

import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.get('/transactions', TransactionController.list);
routes.post('/transactions', TransactionController.execute);

export default routes;
