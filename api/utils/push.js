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
exports.send = function(notificationKey, title, message) {
	if (!notificationKey)
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
	registrationIds.push(notificationKey);

	var sender = new gcm.Sender('AIzaSyA2wW0PR6_oS1sXEBAw2CjQ4o0869eObRw');
	// var sender = new gcm.Sender('AIzaSyBYH2NpUOljHfGaLb6IAobPytDLUZjCZbY');
	sender.send(msg, registrationIds, 4, function (err, result) {
		if (err)  console.log(err);
		else      console.log("Android notification has been sent to " + device.id + " (" + device.model + ")");
	});
}
