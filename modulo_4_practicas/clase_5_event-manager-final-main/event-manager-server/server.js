const { Server } = require("socket.io");

const io = new Server(4000, {
  cors: {
    origin: "*", // Permite conexiones desde cualquier origen
  },
});

let events = []; // Array para almacenar los eventos

// Configuración de Socket.io
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Enviar la lista inicial de eventos al cliente
  socket.emit("event:list", events);

  // Escuchar nuevos eventos desde el cliente
  socket.on("event:add", (newEvent) => {
    events.push(newEvent);
    io.emit("event:update", events); // Enviar actualizaciones a todos los clientes conectados
  });
});
