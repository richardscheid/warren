import { Router } from 'express';

import AccountController from './controllers/AccountController';
import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.get('/accounts', AccountController.find);

routes.get('/transactions', TransactionController.list);
routes.post('/transactions', TransactionController.execute);

export default routes;
