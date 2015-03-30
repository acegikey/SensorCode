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
exports.send = function(notificationKey, title, message, code) {
	if (!notificationKey)
		return;

	var codeJson = JSON.stringify(code);
	var msg = new gcm.Message({
	    collapseKey: 'code',
	    delayWhileIdle: false,
	    timeToLive: 4,
	    data: {
	    	title: title,
	      message: message,
				code: codeJson
	    }
	});

	var registrationIds = [];
	registrationIds.push(notificationKey);
	console.log(codeJson);

	var sender = new gcm.Sender('AIzaSyByrjmrKWgg1IvZhFZspzYVMykKHaGzK0o');
	sender.send(msg, registrationIds, 1, function (err, result) {
		if (err)  console.log(err + " : " + result);
		else      console.log("Android notification has been sent to " + device.id + " (" + device.model + ")");
	});
}
