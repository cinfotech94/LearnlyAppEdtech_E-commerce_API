import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/productController';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = Router();
/**
 * @swagger
 * /api/products/get:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/get', getProducts);
/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imageURL:
 *                 type: string
 *               createdBy:
 *                 type: string
 *                 description: User ID who created the product
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */
router.post('/create', authMiddleware, createProduct);

// Add update and delete routes here...

export default router;
