const
	chai       = require( 'chai' ),
	chaiHttp   = require( 'chai-http' ),
	{ expect } = chai;

chai.use( chaiHttp );

module.exports = [
	{
		description: 'GET /dev/powerOfTwo/:num ( invalid data type )',
		exec: ( app, done ) => {
			chai
				.request( app )
				.get( '/dev/powerOfTwo/abc' )
				.end( ( err, res ) => {
					expect( res ).to.have.status( 400 );
					expect( res.body ).to.have.property( 'name' ).and.eq( 'BAD_REQUEST' );
					expect( res.body ).to.have.property( 'msg' ).and.eq( 'did not receive valid number' );
					done();
				} );
		}
	},
	{
		description: 'GET /dev/powerOfTwo/:num',
		exec: ( app, done ) => {
			chai
				.request( app )
				.get( '/dev/powerOfTwo/4' )
				.end( ( err, res ) => {
					expect( res ).to.have.status( 200 );
					expect( res.body ).to.be.true;
					done();
				} );
		}
	},
	{
		description: 'GET /dev/powerOfTwo/:num',
		exec: ( app, done ) => {
			chai
				.request( app )
				.get( '/dev/powerOfTwo/100' )
				.end( ( err, res ) => {
					expect( res ).to.have.status( 200 );
					expect( res.body ).to.be.false;
					done();
				} );
		}
	}
];

module.exports.context = 'DEVELOPER ROUTES';
