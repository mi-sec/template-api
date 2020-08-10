const
	chai       = require( 'chai' ),
	chaiHttp   = require( 'chai-http' ),
	{ expect } = chai;

chai.use( chaiHttp );

module.exports = [
	{
		description: 'GET /uuid',
		exec: ( app, done ) => {
			chai
				.request( app )
				.get( '/uuid' )
				.end( ( err, res ) => {
					expect( res ).to.have.status( 200 );
					expect( res.body ).to.be.a( 'string' );
					expect( res.body ).to.match(
						/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/i
					);

					done();
				} );
		}
	}
];

module.exports.context = 'CORE';
