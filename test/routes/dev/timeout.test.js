const
	chai       = require( 'chai' ),
	chaiHttp   = require( 'chai-http' ),
	{ expect } = chai;

chai.use( chaiHttp );

module.exports = [
	{
		description: 'GET /dev/timeout/:time',
		exec: ( app, done ) => {
			const start = Date.now();

			chai
				.request( app )
				.get( '/dev/timeout/0.2' )
				.end( ( err, res ) => {
					const end = Date.now() - start;
					expect( res ).to.have.status( 408 );
					expect( end ).to.be.gt( 200 );
					expect( end ).to.be.lt( 220 );
					done();
				} );
		}
	}
];

module.exports.context = 'DEVELOPER ROUTES';
