import { Router, static, Express } from 'express';
import multer from 'multer';
import { extname, resolve } from 'path';
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
import PurchaseItemsController from './app/controllers/PurchaseItemsController';
import BoletoController from './app/controllers/BoletoController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);


// routes.use(
//   cors({
//     origin: 'http://localhost:4200',
//   })
//   );
routes.use(static(resolve("front-end/dist/front-end/")));

routes.get('/', (req,res) => {
  res.sendFile(resolve("front-end/dist/front-end/index.html"))
});

routes.post('/api/sessions', SessionController.store);

// Filter Product
routes.get('/api/filterproduct', FilterProductController.show);
routes.get('/api/filterproductid', FilterProductController.get);

// Filter Category
routes.get('/api/filtercategory', FilterCategoryController.show);

// Filter Client
routes.get('/api/filterclientid', FilterClientController.get);

// State
routes.get('/api/states', StateController.get);

// State
routes.post('/api/boleto', BoletoController.store);
routes.get('/api/boleto', BoletoController.get);

// Clients
routes.post('/api/clients', ClientController.store);
routes.put('/api/clients/:id', ClientController.update);
routes.get('/api/clients', ClientController.get);

routes.get('/api/product', ProductController.get);

// Middlewares
routes.use(authMiddlewares);

// Users
routes.post('/api/users', UserController.store);
routes.put('/api/users/:id', UserController.update);
routes.get('/api/users', UserController.get);

// Product
routes.post('/api/product', ProductController.store);
routes.put('/api/product/:id', ProductController.update);

// Purchase
routes.post('/api/purchase', PurchaseController.store);
routes.get('/api/purchase', PurchaseController.get);

// Purchase Items
routes.post('/api/purchaseitems', PurchaseItemsController.store);
routes.get('/api/purchaseitems', PurchaseItemsController.get);


// Category
routes.post('/api/category', CategoryController.store);
routes.put('/api/category/:id', CategoryController.update);
routes.get('/api/category', CategoryController.get);

// News
routes.post('/api/news', NewsController.store);
routes.put('/api/news/:id', NewsController.update);
routes.get('/api/news', NewsController.get);

// Stock
routes.post('/api/stock', StockController.store);
routes.put('/api/stock/:id', StockController.update);
routes.get('/api/stock', StockController.get);

// Promotion
routes.post('/api/promotions', PromotionController.store);
routes.put('/api/promotions/:id', PromotionController.update);
routes.get('/api/promotions', PromotionController.get);


// Files
routes.post('/api/files', upload.single('file'), FileController.store);

export default routes;
