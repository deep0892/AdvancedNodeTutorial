const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 5000;
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: "Customer API information",
            contact: {
                "name": "Deepankar Singh"
            },
            servers: ["http://localhost:5000 "]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: User to get all customers
 *    responses: 
 *      '200':
 *        description: A successful response
 */
app.get('/customers', (req, res) => {
    console.log('inside /cutomers get method');
    res.send('Customer results');
});


/**
 * @swagger
 * /customers:
 *  put:
 *    description: User to update a customer
 *    responses: 
 *      '200':
 *        description: A successful response
 */
app.put('/customers', (req, res) => {
    console.log('inside /cutomers get method');
    res.send('Successfully updated a customer');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});