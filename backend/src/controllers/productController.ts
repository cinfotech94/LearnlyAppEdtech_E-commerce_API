import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';
interface AuthenticatedRequest extends Request {
  user?: { id: string }; // Adjust according to your user object
}
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
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate('createdBy', 'username');
    res.json(products);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Server error');
    } else {
      console.error('Unexpected error', err);
      res.status(500).send('Server error');
    }
  }
};
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
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, imageURL } = req.body;
    const product = new Product({
        name,
        description,
        price,
        imageURL,
        /*createdBy: req.user?.id*/
    });

    await product.save();
    res.status(201).json(product);
} catch (err) {
      if (err instanceof Error) {
          console.error(err.message);
      } else {
          console.error('An unknown error occurred');
      }
  }
};


