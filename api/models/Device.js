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

    searches: {
      collection: 'Code',
      via: 'searched',
      dominant: true
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

    uuid: {
      type: 'string',
      required: true,
      unique: true
    },

    sensor: {
      model: 'Sensor'
    },

    interlock: {
      model: 'Code'
    }

  }
};
