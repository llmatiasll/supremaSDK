// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var schedule_pb = require('./schedule_pb.js');
var err_pb = require('./err_pb.js');

function serialize_gsdk_schedule_AddHolidayMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.AddHolidayMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.AddHolidayMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddHolidayMultiRequest(buffer_arg) {
  return schedule_pb.AddHolidayMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddHolidayMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.AddHolidayMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.AddHolidayMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddHolidayMultiResponse(buffer_arg) {
  return schedule_pb.AddHolidayMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddHolidayRequest(arg) {
  if (!(arg instanceof schedule_pb.AddHolidayRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.AddHolidayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddHolidayRequest(buffer_arg) {
  return schedule_pb.AddHolidayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddHolidayResponse(arg) {
  if (!(arg instanceof schedule_pb.AddHolidayResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.AddHolidayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddHolidayResponse(buffer_arg) {
  return schedule_pb.AddHolidayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.AddMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.AddMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddMultiRequest(buffer_arg) {
  return schedule_pb.AddMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.AddMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.AddMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddMultiResponse(buffer_arg) {
  return schedule_pb.AddMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddRequest(arg) {
  if (!(arg instanceof schedule_pb.AddRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddRequest(buffer_arg) {
  return schedule_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_AddResponse(arg) {
  if (!(arg instanceof schedule_pb.AddResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_AddResponse(buffer_arg) {
  return schedule_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllHolidayMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllHolidayMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllHolidayMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllHolidayMultiRequest(buffer_arg) {
  return schedule_pb.DeleteAllHolidayMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllHolidayMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllHolidayMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllHolidayMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllHolidayMultiResponse(buffer_arg) {
  return schedule_pb.DeleteAllHolidayMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllHolidayRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllHolidayRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllHolidayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllHolidayRequest(buffer_arg) {
  return schedule_pb.DeleteAllHolidayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllHolidayResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllHolidayResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllHolidayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllHolidayResponse(buffer_arg) {
  return schedule_pb.DeleteAllHolidayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllMultiRequest(buffer_arg) {
  return schedule_pb.DeleteAllMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllMultiResponse(buffer_arg) {
  return schedule_pb.DeleteAllMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllRequest(buffer_arg) {
  return schedule_pb.DeleteAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteAllResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteAllResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteAllResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteAllResponse(buffer_arg) {
  return schedule_pb.DeleteAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteHolidayMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteHolidayMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteHolidayMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteHolidayMultiRequest(buffer_arg) {
  return schedule_pb.DeleteHolidayMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteHolidayMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteHolidayMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteHolidayMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteHolidayMultiResponse(buffer_arg) {
  return schedule_pb.DeleteHolidayMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteHolidayRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteHolidayRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteHolidayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteHolidayRequest(buffer_arg) {
  return schedule_pb.DeleteHolidayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteHolidayResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteHolidayResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteHolidayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteHolidayResponse(buffer_arg) {
  return schedule_pb.DeleteHolidayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteMultiRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteMultiRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteMultiRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteMultiRequest(buffer_arg) {
  return schedule_pb.DeleteMultiRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteMultiResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteMultiResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteMultiResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteMultiResponse(buffer_arg) {
  return schedule_pb.DeleteMultiResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteRequest(arg) {
  if (!(arg instanceof schedule_pb.DeleteRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteRequest(buffer_arg) {
  return schedule_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_DeleteResponse(arg) {
  if (!(arg instanceof schedule_pb.DeleteResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.DeleteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_DeleteResponse(buffer_arg) {
  return schedule_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_GetHolidayListRequest(arg) {
  if (!(arg instanceof schedule_pb.GetHolidayListRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.GetHolidayListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_GetHolidayListRequest(buffer_arg) {
  return schedule_pb.GetHolidayListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_GetHolidayListResponse(arg) {
  if (!(arg instanceof schedule_pb.GetHolidayListResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.GetHolidayListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_GetHolidayListResponse(buffer_arg) {
  return schedule_pb.GetHolidayListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_GetListRequest(arg) {
  if (!(arg instanceof schedule_pb.GetListRequest)) {
    throw new Error('Expected argument of type gsdk.schedule.GetListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_GetListRequest(buffer_arg) {
  return schedule_pb.GetListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gsdk_schedule_GetListResponse(arg) {
  if (!(arg instanceof schedule_pb.GetListResponse)) {
    throw new Error('Expected argument of type gsdk.schedule.GetListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gsdk_schedule_GetListResponse(buffer_arg) {
  return schedule_pb.GetListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ScheduleService = exports.ScheduleService = {
  getList: {
    path: '/gsdk.schedule.Schedule/GetList',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.GetListRequest,
    responseType: schedule_pb.GetListResponse,
    requestSerialize: serialize_gsdk_schedule_GetListRequest,
    requestDeserialize: deserialize_gsdk_schedule_GetListRequest,
    responseSerialize: serialize_gsdk_schedule_GetListResponse,
    responseDeserialize: deserialize_gsdk_schedule_GetListResponse,
  },
  add: {
    path: '/gsdk.schedule.Schedule/Add',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.AddRequest,
    responseType: schedule_pb.AddResponse,
    requestSerialize: serialize_gsdk_schedule_AddRequest,
    requestDeserialize: deserialize_gsdk_schedule_AddRequest,
    responseSerialize: serialize_gsdk_schedule_AddResponse,
    responseDeserialize: deserialize_gsdk_schedule_AddResponse,
  },
  addMulti: {
    path: '/gsdk.schedule.Schedule/AddMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.AddMultiRequest,
    responseType: schedule_pb.AddMultiResponse,
    requestSerialize: serialize_gsdk_schedule_AddMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_AddMultiRequest,
    responseSerialize: serialize_gsdk_schedule_AddMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_AddMultiResponse,
  },
  delete: {
    path: '/gsdk.schedule.Schedule/Delete',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteRequest,
    responseType: schedule_pb.DeleteResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteResponse,
  },
  deleteMulti: {
    path: '/gsdk.schedule.Schedule/DeleteMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteMultiRequest,
    responseType: schedule_pb.DeleteMultiResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteMultiRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteMultiResponse,
  },
  deleteAll: {
    path: '/gsdk.schedule.Schedule/DeleteAll',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteAllRequest,
    responseType: schedule_pb.DeleteAllResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteAllRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteAllRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteAllResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteAllResponse,
  },
  deleteAllMulti: {
    path: '/gsdk.schedule.Schedule/DeleteAllMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteAllMultiRequest,
    responseType: schedule_pb.DeleteAllMultiResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteAllMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteAllMultiRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteAllMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteAllMultiResponse,
  },
  getHolidayList: {
    path: '/gsdk.schedule.Schedule/GetHolidayList',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.GetHolidayListRequest,
    responseType: schedule_pb.GetHolidayListResponse,
    requestSerialize: serialize_gsdk_schedule_GetHolidayListRequest,
    requestDeserialize: deserialize_gsdk_schedule_GetHolidayListRequest,
    responseSerialize: serialize_gsdk_schedule_GetHolidayListResponse,
    responseDeserialize: deserialize_gsdk_schedule_GetHolidayListResponse,
  },
  addHoliday: {
    path: '/gsdk.schedule.Schedule/AddHoliday',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.AddHolidayRequest,
    responseType: schedule_pb.AddHolidayResponse,
    requestSerialize: serialize_gsdk_schedule_AddHolidayRequest,
    requestDeserialize: deserialize_gsdk_schedule_AddHolidayRequest,
    responseSerialize: serialize_gsdk_schedule_AddHolidayResponse,
    responseDeserialize: deserialize_gsdk_schedule_AddHolidayResponse,
  },
  addHolidayMulti: {
    path: '/gsdk.schedule.Schedule/AddHolidayMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.AddHolidayMultiRequest,
    responseType: schedule_pb.AddHolidayMultiResponse,
    requestSerialize: serialize_gsdk_schedule_AddHolidayMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_AddHolidayMultiRequest,
    responseSerialize: serialize_gsdk_schedule_AddHolidayMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_AddHolidayMultiResponse,
  },
  deleteHoliday: {
    path: '/gsdk.schedule.Schedule/DeleteHoliday',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteHolidayRequest,
    responseType: schedule_pb.DeleteHolidayResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteHolidayRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteHolidayRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteHolidayResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteHolidayResponse,
  },
  deleteHolidayMulti: {
    path: '/gsdk.schedule.Schedule/DeleteHolidayMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteHolidayMultiRequest,
    responseType: schedule_pb.DeleteHolidayMultiResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteHolidayMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteHolidayMultiRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteHolidayMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteHolidayMultiResponse,
  },
  deleteAllHoliday: {
    path: '/gsdk.schedule.Schedule/DeleteAllHoliday',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteAllHolidayRequest,
    responseType: schedule_pb.DeleteAllHolidayResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteAllHolidayRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteAllHolidayRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteAllHolidayResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteAllHolidayResponse,
  },
  deleteAllHolidayMulti: {
    path: '/gsdk.schedule.Schedule/DeleteAllHolidayMulti',
    requestStream: false,
    responseStream: false,
    requestType: schedule_pb.DeleteAllHolidayMultiRequest,
    responseType: schedule_pb.DeleteAllHolidayMultiResponse,
    requestSerialize: serialize_gsdk_schedule_DeleteAllHolidayMultiRequest,
    requestDeserialize: deserialize_gsdk_schedule_DeleteAllHolidayMultiRequest,
    responseSerialize: serialize_gsdk_schedule_DeleteAllHolidayMultiResponse,
    responseDeserialize: deserialize_gsdk_schedule_DeleteAllHolidayMultiResponse,
  },
};

exports.ScheduleClient = grpc.makeGenericClientConstructor(ScheduleService);
