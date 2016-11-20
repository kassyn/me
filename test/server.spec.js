var chai = require( 'chai' );

describe( '#indexOf()', function() {
	it( 'should return -1 when the value is not present', function() {
		chai.assert.equal( 1, [1,2,3].indexOf( 4 ) );
	});

	it( 'should return the length', function() {
		var arr = [];
		arr.push( 'foo' );
		chai.expect( arr[0] ).to.equal( 'foo' );
	});
});
