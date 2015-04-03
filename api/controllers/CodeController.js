/**
 * CodeController
 *
 * @description :: Server-side logic for managing codes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

// azimutj	=> -180 ~ 0 ~ 180
// roll 		=> -180 ~ 0 ~ 180
// pitch 		=> 0 ~ -90 ~ 0 ~ 90 ~0

// Mirroring => No Azimuth

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
			pitch: { '>': pitch - 10, '<': pitch + 10 },
			roll: { '>': roll - 10, '<': roll + 10 },
			// latitude: { '>': latitude - 0.01, '<': latitude + 0.01 },
			// longitude: { '>': longitude - 0.01, '<': longitude + 0.01 }
		})
		.populate('device')
		.exec(function callback(err, sensors) {
			if (err || !sensors)
				return res.send(new Array());

			var codeIds = new Array();
			for (var i = 0; i < sensors.length; i++)
				if (sensors[i] && sensors[i].device && sensors[i].device.interlock)
					codeIds.push(sensors[i].device.interlock);

			Code
			.find({
				// azimuth: { '>': azimuth - 50, '<': azimuth + 50 },
				pitch: { '>': pitch - 10, '<': pitch + 10 },
				roll: { '>': roll - 20, '<': roll + 20 },
				// latitude: { '>': latitude - 0.01, '<': latitude + 0.01 },
				// longitude: { '>': longitude - 0.01, '<': longitude + 0.01 }
			})
			.exec(function callback(err, searched) {
				if (searched)
					for (var i = 0; i < searched.length; i++)
							codeIds.push(searched[i].id);

				Code.find(codeIds).exec(function callback(err, codes) {
					if (err || !codes)
						return res.send(new Array());

					return res.send(codes);
				});
			});
		});
	}

};
