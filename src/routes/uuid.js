/** ****************************************************************************************************
 * @file: uuid.js
 * @project: template-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 16-Nov-2017
 *******************************************************************************************************/
'use strict';

module.exports.method = 'GET';
module.exports.route  = '/uuid';
module.exports.exec   = ( req, res ) => {
	res.status( 200 ).json( req.rid );
};
