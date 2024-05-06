const grpc = require('grpc');
const fs = require('fs');
const connect = require('../../connect');
const event = require('../../event');
const testEvent = require('./testEvent');
const path = require('path');
const httpService = require('./http.service');
const httpServiceInstance = httpService.getInstance();
const app = httpServiceInstance.getApp();
const server = httpServiceInstance.getServer();
const cors = require('cors');
app.use(cors());

const GATEWAY_CA_FILE = path.join(__dirname, '../../../cert/ca.crt');
const GATEWAY_IP = 'localhost';
const GATEWAY_PORT = 4000;

const DEVICE_IP = '192.168.100.120';
const DEVICE_PORT = 51211;
const USE_SSL = false;

const CODE_MAP_FILE = path.join(__dirname, '../event_code.json');

async function test() {
  var deviceID = 0;

  try {
   
    deviceID = await connect.connectToDevice(DEVICE_IP, DEVICE_PORT, USE_SSL);

    event.initCodeMap(CODE_MAP_FILE);
    
    await testEvent.startMonitoring(deviceID);

    await testEvent.test(deviceID);

    await testEvent.stopMonitoring(deviceID);

    await connect.disconnect([deviceID]);    
  }
  catch(err) {
    console.error('Cannot finish the event test: ', err);

    if(deviceID != 0) {
      await connect.disconnect([deviceID]);      
    }
  }
}


function main() {
  server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
  
  var rootCa = fs.readFileSync(GATEWAY_CA_FILE);
  var sslCreds = grpc.credentials.createSsl(rootCa);
  var addr = `${GATEWAY_IP}:${GATEWAY_PORT}`;

  connect.initClient(addr, sslCreds);
  event.initClient(addr, sslCreds);

  test();
}

main();
