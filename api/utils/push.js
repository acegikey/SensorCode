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

	var sender = new gcm.Sender('AIzaSyDTAygXcz2BtEzqRvCIhGqoAlB05q8yRp4');
	sender.send(msg, registrationIds, 4, function (err, result) {
		if (err)  console.log(err);
		else      console.log("Android notification has been sent to " + device.id + " (" + device.model + ")");
	});
}
