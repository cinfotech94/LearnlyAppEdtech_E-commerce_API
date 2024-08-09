import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce API',
            version: '1.0.0',
            description: 'API documentation for the E-commerce product listing application',
            contact: {
                name: 'Oladunjoye Afeez',
                url: 'https://linkedin.com/in/cinfotech94',
                email: 'cinfotech1194@gmail.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server'
            }
        ]
    },
    apis: ['./src/routes/*.ts', './src/models/*.ts'] // Ensure paths are correct
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default (app: Express) => {
    app.use('/EcommerceAPI', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    console.log('Swagger docs available at http://localhost:5000/EcommerceAPI');
};
