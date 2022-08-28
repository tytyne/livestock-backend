import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'LivestockBank Application',
      version: '1.0.0',
      description: 'Welcome to LivesctockBackend Application',
      servers: ['https://localhost:'],
      In:"header",
      Name:"Authorization",
      Type:"apiKey"
    },
  
  },
  
  
  apis: ['docs/*.js','docs/controllers/*.js','docs/models/*.js','docs/models/*.yml','docs/controllers/*.yml'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
