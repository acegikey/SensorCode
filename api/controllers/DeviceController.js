/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var push = require('../utils/push');

module.exports = {

  push: function(req, res) {
		var title = parseFloat(req.param('title'));
		var message = parseFloat(req.param('message'));
		var device_id = parseFloat(req.param('device_id'));

    Device
    .findOneById(device_id)
		.exec(function callback(err, device) {
			if (err || !device)
        return res.send(404);

      push.send(device.notification_key, title, message);
      return res.send(200);
    });
  }

};
