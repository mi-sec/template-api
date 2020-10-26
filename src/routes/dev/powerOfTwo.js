'use strict';

const { isPowerOfTwo } = require( '../../utils/index' );

module.exports.method = 'GET';
module.exports.route  = '/dev/powerOfTwo/:num';
module.exports.exec   = ( req, res ) => {

	const x = parseInt( req.params.num );

	if ( !Number.isNaN( x ) ) {
		res.status( 200 ).json( isPowerOfTwo( x ) );
	}
	else {
		res.status( 400 ).json( {
			name: 'BAD_REQUEST',
			msg: 'did not receive valid number'
		} );
	}
};
