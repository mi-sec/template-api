/** ****************************************************************************************************
 * @file: timeout.js
 * @project: template-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 31-Oct-2017
 *******************************************************************************************************/
'use strict';

const
	{ wait } = require( '../../utils/index' );

module.exports.method = 'GET';
module.exports.route  = '/dev/timeout/:time';
module.exports.exec   = async ( req, res ) => {
	await wait( ( +req.params.time || 2 ) * 1000 );
	res.status( 408 ).json( 'Request Timeout' );
};
