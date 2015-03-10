/**
 * CodeController
 *
 * @description :: Server-side logic for managing codes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	search: function(req, res) {
		var azimuth = parseFloat(req.param('azimuth'));
		var pitch = parseFloat(req.param('pitch'));
		var roll = parseFloat(req.param('roll'));
		var latitude = parseFloat(req.param('latitude'));
		var longitude = parseFloat(req.param('longitude'));

		Sensor
		.find({
			// azimuth: { '>': azimuth - 50, '<': azimuth + 50 },
			pitch: { '>': pitch - 5, '<': pitch + 5 },
			roll: { '>': roll - 5, '<': roll + 5 },
			latitude: { '>': latitude - 0.001, '<': latitude + 0.001 },
			longitude: { '>': longitude - 0.001, '<': longitude + 0.001 }})
		.populate('device')
		.exec(function callback(err, sensors) {
			if (err || !sensors)
				return res.send(new Array());

			var codeIds = new Array();
			for (var i = 0; i < sensors.length; i++)
				if (sensors[i] && sensors[i].device && sensors[i].device.interlock)
					codeIds.push(sensors[i].device.interlock);

			Code.find(codeIds).exec(function callback(err, codes) {
				if (err || !codes)
					return res.send(new Array());

				return res.send(codes);
			});
		});
	}

};
