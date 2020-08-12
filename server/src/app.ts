import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private database(): void {
    mongoose.connect('HEY, ADD URI HERE IN THE FUTURE', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
