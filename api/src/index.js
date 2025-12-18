const express = require('express');
const cors = require('cors');
const router = require('./router/index.route');
const sequelize = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de Swagger
const swaggerDocs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Cooperativa',
      version: '1.0.0',
      description: 'API de Productos',
    },
    servers: [
      { url: `https://${process.env.RAILWAY_STATIC_URL}` || 'http://localhost:5000' }
    ],
  },
  apis: ['./src/router/*.js'],
});

// Middlewares
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

// Rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/v1', router);

// Conexión y Arranque
sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Database connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server ready on port ${PORT}`);
    });
  })
  .catch(err => console.error('❌ Database error:', err));