import { Router } from 'express';
import multer from 'multer';
import cors from 'cors';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import NewsController from './app/controllers/NewsController';
import StockController from './app/controllers/StockController';
import SessionController from './app/controllers/SessionController';
import FilterProductController from './app/controllers/FilterProductController';
import FileController from './app/controllers/FileController';
import ClientController from './app/controllers/ClientController';
// import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

// Middlewares
// routes.use(authMiddlewares);

// Filter
routes.get('/filter', FilterProductController.show);

// Clients
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.get('/clients', ClientController.get);

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

// Files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
