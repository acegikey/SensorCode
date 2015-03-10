/**
* Phone.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'someRedisServer',

  attributes: {

    device: {
      model: 'Device'
    },

    azimuth: {
      type: 'float'
    },

    pitch: {
      type: 'float'
    },

    roll: {
      type: 'float'
    },

    latitude: {
      type: 'float'
    },

    longitude: {
      type: 'float'
    }
  },

  afterCreate: function(values, next) {
    if (!values.device) {
      Device.findOne({sensor:values.id}).exec(function callback(err, device) {
        if (err || !device)
          next();

        Sensor.update({id: values.id}, {device: device.id}).exec(function callback(err, sensor) {
          next();
        });
      });
    } else
      next();
  }
};