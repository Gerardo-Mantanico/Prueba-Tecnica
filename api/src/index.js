const express = require('express');
const cors = require('cors');
const router = require('./router/index.route');
const sequelize = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Swagger
const swaggerDocs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Cooperativa',
      version: '1.0.0',
      description: 'API de Productos',
    },
    servers: [{ url: 'http://localhost:5000' }],
  },
  apis: ['./src/router/*.js'],
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Rutas
app.use('/api/v1', router);

// Iniciar servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected and synced');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });