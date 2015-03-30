/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var push = require('../utils/push');

module.exports = {

  update: function(req, res) {
		var deviceId = req.param('deviceId');
		var notificationKey = req.param('notificationKey');
    if (!deviceId || !notificationKey)
      return res.send(400);

    Device
    .update({id : deviceId}, {notificationKey : notificationKey})
		.exec(function callback(err, device) {
			if (err || !device)
        return res.send(500);

      return res.send(device);
    });
  },

  push: function(req, res) {
		var title = req.param('title');
		var message = req.param('message');
		var to = req.param('to');
		var from = req.param('from');

    Device
    .findOneById(to)
		.exec(function callback(err, device) {
			if (err || !device)
        return res.send(404);

      Code
      .findOne({device : from})
      .exec(function callback(err, code) {
  			if (err || !code)
          return res.send(404);

        push.send(device.notificationKey, title, message, code);
        return res.send(200);
      });
    });
  }

};
