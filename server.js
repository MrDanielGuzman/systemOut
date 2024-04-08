const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Agregar middleware para procesar solicitudes POST
server.use(jsonServer.bodyParser);

// Manejar solicitudes POST para agregar nuevas preguntas frecuentes
server.post('/preguntasFrecuentes', (req, res, next) => {
  const nuevaPregunta = req.body;
  nuevaPregunta.id = Date.now(); // Generar un ID único para la nueva pregunta
  router.db.get('preguntasFrecuentes').push(nuevaPregunta).write(); // Agregar la nueva pregunta al archivo db.json
  res.sendStatus(200);
});

// Asignar el router JSON Server
server.use(router);

// Configurar el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está corriendo en el puerto ${PORT}`);
});
