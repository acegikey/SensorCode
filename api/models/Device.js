/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    codes: {
      collection: 'Code',
      via: 'device'
    },

    os: {
      type: 'string',
      enum: ['Android', 'iOS']
    },

    manufacturer: {
      type: 'string'
    },

    model: {
      type: 'string'
    },

    deviceId: {
      type: 'string'
    },

    sensor: {
      model: 'Sensor'
    },

    interlock: {
      model: 'Code'
    }

  }
};
