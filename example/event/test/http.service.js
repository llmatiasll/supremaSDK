const express = require('express');

class HTTPService {
  constructor() {
    this.app = express();
    this.server = require('http').createServer(this.app);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new HTTPService();
    }
    return this.instance;
  }

  getApp() {
    return this.app;
  }

  getServer() {
    return this.server;
  }
}

module.exports = HTTPService;
