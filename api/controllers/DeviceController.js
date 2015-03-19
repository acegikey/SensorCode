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
		var notification_key = parseFloat(req.param('notification_key'));

    push.send(notification_key, title, message);
    return res.send(200);
  }

};
