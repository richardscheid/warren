import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AccountController from './controllers/AccountController';
import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.get('/accounts', AccountController.find);

routes.get('/transactions', TransactionController.list);

routes.post(
  '/transactions',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      type: Joi.number().required(),
      amount: Joi.number().required(),
    }),
  }),
  TransactionController.execute
);

export default routes;
