// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var timed_apb_zone_pb = require('./timed_apb_zone_pb.js');
var zone_pb = require('./zone_pb.js');
var action_pb = require('./action_pb.js');

function serialize_gsdk_timed_apb_zone_AddRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.AddRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_AddRequest(buffer_arg) {
  return timed_apb_zone_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_AddResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.AddResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_AddResponse(buffer_arg) {
  return timed_apb_zone_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_ClearAllRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.ClearAllRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.ClearAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_ClearAllRequest(buffer_arg) {
  return timed_apb_zone_pb.ClearAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_ClearAllResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.ClearAllResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.ClearAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_ClearAllResponse(buffer_arg) {
  return timed_apb_zone_pb.ClearAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_ClearRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.ClearRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.ClearRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_ClearRequest(buffer_arg) {
  return timed_apb_zone_pb.ClearRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_ClearResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.ClearResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.ClearResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_ClearResponse(buffer_arg) {
  return timed_apb_zone_pb.ClearResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_DeleteAllRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.DeleteAllRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.DeleteAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_DeleteAllRequest(buffer_arg) {
  return timed_apb_zone_pb.DeleteAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_DeleteAllResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.DeleteAllResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.DeleteAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_DeleteAllResponse(buffer_arg) {
  return timed_apb_zone_pb.DeleteAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_DeleteRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.DeleteRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_DeleteRequest(buffer_arg) {
  return timed_apb_zone_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_DeleteResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.DeleteResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_DeleteResponse(buffer_arg) {
  return timed_apb_zone_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_GetRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.GetRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_GetRequest(buffer_arg) {
  return timed_apb_zone_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_GetResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.GetResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_GetResponse(buffer_arg) {
  return timed_apb_zone_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_GetStatusRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.GetStatusRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.GetStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_GetStatusRequest(buffer_arg) {
  return timed_apb_zone_pb.GetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_GetStatusResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.GetStatusResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.GetStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_GetStatusResponse(buffer_arg) {
  return timed_apb_zone_pb.GetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_SetAlarmRequest(arg) {
  if (!(arg instanceof timed_apb_zone_pb.SetAlarmRequest)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.SetAlarmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_SetAlarmRequest(buffer_arg) {
  return timed_apb_zone_pb.SetAlarmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_timed_apb_zone_SetAlarmResponse(arg) {
  if (!(arg instanceof timed_apb_zone_pb.SetAlarmResponse)) {
    throw new Error('Expected argument of type gsdk.timed_apb_zone.SetAlarmResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_timed_apb_zone_SetAlarmResponse(buffer_arg) {
  return timed_apb_zone_pb.SetAlarmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TimedAPBZoneService = exports.TimedAPBZoneService = {
  get: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/Get',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.GetRequest,
    responseType: timed_apb_zone_pb.GetResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_GetRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_GetRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_GetResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_GetResponse,
  },
  getStatus: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.GetStatusRequest,
    responseType: timed_apb_zone_pb.GetStatusResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_GetStatusRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_GetStatusRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_GetStatusResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_GetStatusResponse,
  },
  add: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/Add',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.AddRequest,
    responseType: timed_apb_zone_pb.AddResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_AddRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_AddRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_AddResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_AddResponse,
  },
  clear: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/Clear',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.ClearRequest,
    responseType: timed_apb_zone_pb.ClearResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_ClearRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_ClearRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_ClearResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_ClearResponse,
  },
  clearAll: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/ClearAll',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.ClearAllRequest,
    responseType: timed_apb_zone_pb.ClearAllResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_ClearAllRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_ClearAllRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_ClearAllResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_ClearAllResponse,
  },
  delete: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/Delete',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.DeleteRequest,
    responseType: timed_apb_zone_pb.DeleteResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_DeleteRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_DeleteRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_DeleteResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_DeleteResponse,
  },
  deleteAll: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/DeleteAll',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.DeleteAllRequest,
    responseType: timed_apb_zone_pb.DeleteAllResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_DeleteAllRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_DeleteAllRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_DeleteAllResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_DeleteAllResponse,
  },
  setAlarm: {
    path: '/gsdk.timed_apb_zone.TimedAPBZone/SetAlarm',
    requestStream: false,
    responseStream: false,
    requestType: timed_apb_zone_pb.SetAlarmRequest,
    responseType: timed_apb_zone_pb.SetAlarmResponse,
    requestSerialize: serialize_gsdk_timed_apb_zone_SetAlarmRequest,
    requestDeserialize: deserialize_gsdk_timed_apb_zone_SetAlarmRequest,
    responseSerialize: serialize_gsdk_timed_apb_zone_SetAlarmResponse,
    responseDeserialize: deserialize_gsdk_timed_apb_zone_SetAlarmResponse,
  },
};

exports.TimedAPBZoneClient = grpc.makeGenericClientConstructor(TimedAPBZoneService);
