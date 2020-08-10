/** ****************************************************************************************************
 * @file: superstructs.js
 * @project: template-api
 * @author Nick Soggin <iSkore@users.noreply.github.com> on 14-Aug-2018
 *******************************************************************************************************/
'use strict';

const
	{ superstruct } = require( 'superstruct' ),
	{
		isNumber,
		isString
	}               = require( '../utils/index' );

const
	types  = {
		stringNumber: ( d ) => ( isNumber( d ) || isString( d ) ) && +d === +d,
		uuid: ( d ) => /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/.test( d ),
		'*': ( d ) => d === d
	},
	struct = superstruct( { types } );

/**
 * structs
 * @description
 * list of json structures used throughout the api
 * @mixin structs
 */
module.exports = {
	login: {
		username: 'string',
		password: 'string'
	},
	types,
	struct,
	validate: ( expected, data ) => new Promise(
		( res, rej ) => {
			const validation = struct( expected ).validate( data );
			if ( validation[ 0 ] ) {
				rej( { error: validation[ 0 ].message, expected } );
			}
			else {
				res( validation[ 1 ] );
			}
		}
	)
};
