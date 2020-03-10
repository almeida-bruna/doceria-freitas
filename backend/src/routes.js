import { Router } from 'express';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import NewsController from './app/controllers/NewsController';
import StockController from './app/controllers/StockController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

// Middlewares
routes.use(authMiddlewares);

// Users
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.get('/users', UserController.get);

// Product
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);
routes.get('/product', ProductController.get);

// News
routes.post('/news', NewsController.store);
routes.put('/news/:id', NewsController.update);
routes.get('/news', NewsController.get);

// Stock
routes.post('/stock', StockController.store);
routes.put('/stock/:id', StockController.update);
routes.get('/stock', StockController.get);

export default routes;
