import { Router } from 'express';
import multer from 'multer';
// import cors from 'cors';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import NewsController from './app/controllers/NewsController';
import StockController from './app/controllers/StockController';
import SessionController from './app/controllers/SessionController';
import FilterProductController from './app/controllers/FilterProductController';
import FilterCategoryController from './app/controllers/FilterCategoryController';
import FileController from './app/controllers/FileController';
import ClientController from './app/controllers/ClientController';
import CategoryController from './app/controllers/CategoryController';
import StateController from './app/controllers/StateController';
import PromotionController from './app/controllers/PromotionController';
import FilterClientController from './app/controllers/FilterClientController';
import PurchaseController from './app/controllers/PurchaseController';
import BoletoController from './app/controllers/BoletoController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);


// routes.use(
//   cors({
//     origin: 'http://localhost:4200',
//   })
//   );

routes.post('/sessions', SessionController.store);

// Filter Product
routes.get('/filterproduct', FilterProductController.show);
routes.get('/filterproductid', FilterProductController.get);

// Filter Category
routes.get('/filtercategory', FilterCategoryController.show);

// Filter Client
routes.get('/filterclientid', FilterClientController.get);

// State
routes.get('/states', StateController.get);

// State
routes.post('/boleto', BoletoController.store);
routes.get('/boleto', BoletoController.get);

// Clients
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.get('/clients', ClientController.get);

routes.get('/product', ProductController.get);

// Middlewares
routes.use(authMiddlewares);

// Users
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.get('/users', UserController.get);

// Product
routes.post('/product', ProductController.store);
routes.put('/product/:id', ProductController.update);

// Purchase
routes.post('/purchase', PurchaseController.store);
routes.get('/purchase', PurchaseController.get);


// Category
routes.post('/category', CategoryController.store);
routes.put('/category/:id', CategoryController.update);
routes.get('/category', CategoryController.get);

// News
routes.post('/news', NewsController.store);
routes.put('/news/:id', NewsController.update);
routes.get('/news', NewsController.get);

// Stock
routes.post('/stock', StockController.store);
routes.put('/stock/:id', StockController.update);
routes.get('/stock', StockController.get);

// Promotion
routes.post('/promotions', PromotionController.store);
routes.put('/promotions/:id', PromotionController.update);
routes.get('/promotions', PromotionController.get);


// Files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
