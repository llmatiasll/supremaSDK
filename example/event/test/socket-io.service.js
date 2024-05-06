const httpService = require('./http.service');
const httpServiceInstance = httpService.getInstance();
const server = httpServiceInstance.getServer();
const socketIO = require('socket.io');
const io = socketIO(server, { cors: { origin: 'http://localhost:4200', methods: ['GET', 'POST'] } });


class SocketIOService {
    constructor() {
      this.server = httpService.getInstance().getServer();
      this.io = io;
      

      this.io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      })
    }
  
    static getInstance() {
      if (!this.instance) {
        this.instance = new SocketIOService();
      }
      return this.instance;
    }

    emit(event, message ) {
      this.io.emit(event, message);
    }

    listen(event, callback) {
      return this.io.on(event, callback);
    }
  
    getIO() {
      return this.io;
    }
  }
  
  module.exports = SocketIOService;