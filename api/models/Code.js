/**
* Code.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    device: {
    	model: 'Device'
    },

    searched: {
      collection: 'Device',
      via: 'searches'
    },

    type: {
      type: 'string',
      enum: ['phone', 'vehicle', 'poster'],
      defaultsTo: 'poster',
      required: true
    },

    icon: {
      type: 'string',
      enum: ['account', 'content', 'image', 'video', 'menu'],
      defaultsTo: 'content',
      required: true
    },

    title: {
      type: 'string',
      defaultsTo: 'No Title',
      required: true
    },

    message: {
      type: 'string',
      defaultsTo: 'No Message',
      required: true
    },

    image: {
      type: 'string'
    },

    birthday: {
      type: 'string'
    },

    job: {
      type: 'string'
    },

    education: {
      type: 'string'
    },

    gender: {
      type: 'string',
      enum: ['man', 'woman']
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

  }
};
