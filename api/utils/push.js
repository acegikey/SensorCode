/**
 * Notification.js
 *
 * @module			:: Json Handler
 * @description	:: Contains logic for notification JSON handling.
 *
 *  {
 *      "title" : "title",
 *      "message": "message"
 *  }
 */

var gcm = require('node-gcm');

// Function to get id list
exports.send = function(notification_key, title, message) {
	if (!notification_key)
		return;

	var msg = new gcm.Message({
	    collapseKey: 'code',
	    delayWhileIdle: false,
	    timeToLive: 4,
	    data: {
	    	title: title,
	      message: message
	    }
	});

	var registrationIds = [];
	registrationIds.push(notification_key);

		// var sender = new gcm.Sender('xJ7iDatgUgr7ie9gML0dxSpL8scPyh0');
	var sender = new gcm.Sender('AIzaSyBYH2NpUOljHfGaLb6IAobPytDLUZjCZbY');
	sender.send(msg, registrationIds, 2, function (err, result) {
		if (err)  console.log(err);
		else      console.log("Android notification has been sent to " + device.id + " (" + device.model + ")");
	});
}
