/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  list: function(req, res) {
		var to = req.param('to');
		var from = req.param('from');

		Message
		.find({
			or : [
		    { to : [to, from] },
		    { from : [to, from] }
		  ]
		})
		.sort({ createdAt: 'desc' })
		.exec(function callback(err, messages) {
			if (err || !messages)
        return res.send(404);

      return res.send(messages);
		});
  }

};
