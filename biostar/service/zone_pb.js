// source: zone.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.gsdk.zone.Status', null, global);
goog.exportSymbol('proto.gsdk.zone.Type', null, global);
goog.exportSymbol('proto.gsdk.zone.ZoneStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gsdk.zone.ZoneStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gsdk.zone.ZoneStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gsdk.zone.ZoneStatus.displayName = 'proto.gsdk.zone.ZoneStatus';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gsdk.zone.ZoneStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.gsdk.zone.ZoneStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gsdk.zone.ZoneStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gsdk.zone.ZoneStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    disabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gsdk.zone.ZoneStatus}
 */
proto.gsdk.zone.ZoneStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gsdk.zone.ZoneStatus;
  return proto.gsdk.zone.ZoneStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gsdk.zone.ZoneStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gsdk.zone.ZoneStatus}
 */
proto.gsdk.zone.ZoneStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setZoneid(value);
      break;
    case 2:
      var value = /** @type {!proto.gsdk.zone.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gsdk.zone.ZoneStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gsdk.zone.ZoneStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gsdk.zone.ZoneStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gsdk.zone.ZoneStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoneid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 zoneID = 1;
 * @return {number}
 */
proto.gsdk.zone.ZoneStatus.prototype.getZoneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.gsdk.zone.ZoneStatus} returns this
 */
proto.gsdk.zone.ZoneStatus.prototype.setZoneid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.gsdk.zone.Status}
 */
proto.gsdk.zone.ZoneStatus.prototype.getStatus = function() {
  return /** @type {!proto.gsdk.zone.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.gsdk.zone.Status} value
 * @return {!proto.gsdk.zone.ZoneStatus} returns this
 */
proto.gsdk.zone.ZoneStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool disabled = 3;
 * @return {boolean}
 */
proto.gsdk.zone.ZoneStatus.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.gsdk.zone.ZoneStatus} returns this
 */
proto.gsdk.zone.ZoneStatus.prototype.setDisabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.gsdk.zone.Type = {
  APB: 0,
  TIMED_APB: 1,
  FIRE_ALARM: 2,
  SCHEDULED_LOCK: 3,
  INTRUSION_ALARM: 4,
  INTERLOCK: 5,
  LIFT: 6
};

/**
 * @enum {number}
 */
proto.gsdk.zone.Status = {
  NORMAL: 0,
  ALARMED: 1,
  LOCKED: 2,
  UNLOCKED: 4,
  LIFT_LOCKED: 2,
  LIFT_UNLOCKED: 4,
  ARMED: 8,
  DISARMED: 0
};

goog.object.extend(exports, proto.gsdk.zone);
