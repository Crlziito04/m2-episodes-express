const server = require("./src/server.js");

PORT = 3000;

server.listen(
  PORT,
  () => console.log(`Server listening on http://localhost:${PORT}`)
);

//* index.js => server (server.js) => router => controller => services