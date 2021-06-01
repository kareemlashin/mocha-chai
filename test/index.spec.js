var chai = require('chai');
var expect = chai.expect;
var should = chai.should(); //actually call the function
var assert = chai.assert;
const {
  alwaysTrue,
  alwaysFalse,
  Users,
  fnError,
  add,
  sub,
  mul,
  div,
} = require('./../script/index');
// ^ https://www.chaijs.com/api/bdd/
// ^ https://gist.github.com/prof3ssorSt3v3/237810569e39d1c29156de84b6739cc2
// ^ https://gist.github.com/yoavniran/1e3b0162e1545055429e
// ^ https://devhints.io/chai
// ^ https://github.com/zsolt-nagy/mocha-chai-sinon-cheatsheet/blob/master/spec/mocha-chai-cheatsheet.spec.js

describe('hooks', () => {
  before(() => {
    console.log('before');
  });

  after(() => {
    console.log('after');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });
});
describe('index file', () => {
  it('add(1,1)', () => {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('sub(1,1)', () => {
    expect(sub(1, 1)).to.be.equal(0);
  });

  it('mul(1,1)', () => {
    expect(mul(1, 1)).to.be.equal(1);
  });

  it('div(1,1)', () => {
    expect(div(1, 1)).to.be.equal(1);
  });
});

describe('api ', () => {
  it('should api', async () => {
    const user = await Users();
    expect(user.data.id).to.be.equal(1);
    expect(user.data.id).to.be.equal(1);
  });
});
describe('Name of the group', () => {
  it('Should test', () => {
    var foo = 'bar';
    foo.should.be.equal('bar');
  });
});
// ! not

describe('not', () => {
	it('not test', () => {
		expect(1).to.not.equal('b');
	});
});

// ! a / an type

describe('a an', () => {
	it('a an test', () => {
		expect('foo').to.be.a('string');
		expect({a: 1}).to.be.a('object');
		expect(null).to.be.an('null');
		expect(undefined).to.be.an('undefined');
	});
});

// ! include

describe('include ', () => {
	it('include test', () => {
		expect('foobar').to.include('foo');
		expect([1, 2, 3]).to.include(2);
		expect([1, 2, 3]).to.be.an('array').that.includes(2);
		expect({a: 1, b: 2, c: 3}).to.include.keys('a', 'b');

	});
});

// ! true
describe('true ', () => {
	it('true test', () => {
		expect(true).to.be.true;
		expect(false).to.be.false; 

	});
});
// ! null
describe('null ', () => {
	it('null test', () => {
		expect(null).to.be.null;

	});
});
// ! undefined
describe('undefined ', () => {
	it('undefined test', () => {
		expect(undefined).to.be.undefined;

	});
});

// ! NaN
describe('NaN ', () => {
	it('NaN test', () => {
		expect('foo').to.not.be.NaN; // Not recommended

	});
});

// ! empty

describe('empty ', () => {
	it('empty test', () => {
		expect([]).to.be.empty;

	});
});

// ! above

describe('above ', () => {
	it('above test', () => {
		expect(2).to.be.above(1); // Not recommended
	});
});

// ! lengthOf
describe('lengthOf ', () => {
	it('lengthOf test', () => {
		expect([1, 2, 3]).to.have.lengthOf(3);
		expect('foo').to.have.lengthOf(3);

	});
});

// ! keys
describe('keys ', () => {
	it('keys test', () => {
		expect({a: 1, b: 2}).to.have.keys('a', 'b');
	});
});

// ! Error throw

describe('Error ', () => {
	it('Error test', () => {
		expect(fnError).to.throw(Error);
	})
});

/*=============================================
// ^                 assert                   =
=============================================*/

describe('assert ', () => {
	it('assert test', () => {

	})
});


/*============  End of assert  =============*/


describe('learning',()=>{
	let x=5;
	let str="name hear kareem";
	let arr=[1,2,3,4,5,6];
	let obj={
		name:"kareem",
		age:25
	};
	let nu=null;
	let nud=undefined;
	let bool=true;
	it('boolean',()=>{
		assert.isBoolean(bool);
		expect(bool).to.be.equal(true)
		expect(bool).to.not.be.equal(false)
		expect(false).to.be.false;
		expect(true).to.be.true;
		expect(alwaysTrue()).to.not.be.false

	})
	
	it('number',()=>{
		assert.equal(5,5);
		assert.isNumber(x);
		assert.isNotNumber(str);
		expect(10).to.be.above(5);
		expect(2).to.equal(2); // Recommended
		expect(2).to.not.equal(1); // Not recommended

	})
	
	it('string',()=>{
		assert.isString(str);
		assert.isNotString(arr);
		assert.equal('name','name');
		expect('test').to.be.a('string');
		expect('test').to.be.an('string');
		expect('foobar').to.include('foo');

	})
	
	it('null',()=>{
		assert.isNull(nu);
		assert.isNotNull(nud);
		expect(null).to.be.null;
		expect(null).to.be.a('null');
	})
	it('undefined',()=>{
		assert.isUndefined(nud);

	})
	
	it('array',()=>{
		assert.isArray(arr);
		expect(arr).to.have.lengthOf.above(2);
		expect([]).to.be.empty;
		expect([1,2,3]).to.include(2);
		expect('foobar').to.contain('foo');
		expect([ 1, 2, 3]).to.have.lengthOf(3);
		expect([1, 2]).to.be.an('array').that.does.not.include(3);

	})
	it('object',()=>{
		assert.isObject(obj);
		expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
		expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
		expect({a: 1}).to.not.have.property('b');
	})
	it('Error', () => {
		expect(fnError).to.throw(Error);
	})
	
})

describe('only skip', () => { 
    /* 
      it.only('#indexOf()', function() {
        assert.isArray(myObj.arr(), 'is array of numbers');

      });
      */
    it.skip('should return -1 unless present', function () {
    });
});


describe( 'Mocha, Chai Expect Cheat Sheet', function() {
	it( 'should check types', function() {
		expect( '1' ).to.be.a( 'string' );
		expect( 1 ).to.be.a( 'number' );
		expect( true ).to.be.a( 'boolean' );
		expect( {} ).to.be.an( 'object' );
		expect( null ).to.be.a( 'null' );
		expect( undefined ).to.be.a( 'undefined' );
		expect( null ).to.be.a( 'null' );
		expect( [] ).to.be.an( 'array' );
		expect( 0/0 ).to.be.a( 'number' );
	} );



	it( 'should chain multiple checks on the same object', function() {
		var name = 'Mocha';
		expect( name ).to.be.a( 'string' ).and
					  .to.equal( 'Mocha' );
	} );


	it( 'should check object properties', function() {
		var player = {
			name: 'Mario', 
			coins: 55,
			inventory: {
				mushrooms: 2,
				stars: 3
			}
		};

		// check the existence of a key
		expect( player ).to.have.property( 'coins' );
		// check the existence of a key + check its value
		expect( player ).to.have.property( 'name', 'Mario' );
		// deep properties
	} );

	it( 'should check the length property', function() {
		expect( [] ).to.have.length( 0 );
		expect( 'Mocha' ).to.have.length( 5 );
		expect( [] ).to.have.property( 'length', 0 );
		expect( 'Mocha' ).to.have.property( 'length', 5 );
	} );

	it( 'should check own properties', function() {
		var o =  { name: 'Mocha' } ;

		expect( o ).to.have.property( 'name' );
	} );

	it( 'should check if an array contains an element', function() {
		expect( [1, 3, 5] ).to.contain( 3 );
		expect( [1, 3, 5] ).to.not.contain( 4 );

		// contain expressed without contain
		expect( [1, 3, 5].indexOf( 3 ) ).to.not.equal( -1 );
	} );	

	it( 'should check keys of an object', function() {
		var jsonPayload =
		{
			name:    'John',
			email:   'john@user.com',
			country: 'NZL'
		}

		// exact matching of all keys
		expect( jsonPayload ).to.have.keys( [ 'name', 'email', 'country' ] );
		// exclusion of keys
		expect( jsonPayload ).to.not.have.keys( [ 'repeat_email' ] );
		// inclusion of keys
		expect( jsonPayload ).to.contain.keys( [ 'name' ] );	
	} );

	it( 'should compare ordered values', function() {
		expect( 2 ).to.be.above( 1 );
		expect( 1 ).to.not.be.above( 1 );
		expect( 1 ).to.be.at.least( 1 );

		expect( 1 ).to.be.below( 2 );
		expect( 1 ).to.not.be.below( 1 );
		expect( 1 ).to.be.at.most( 1 );

		expect( 1 ).to.be.within( 0, 2 );
	} );

	it( 'should check the instanceof relationship', function() {
		var C = function( ) { this.a = 1; };
		var D = function( ) { this.b = 2; };
		D.prototype = new C();

		var c = new C();
		var d = new D();

		expect( c ).to.be.an.instanceof( C );
		expect( c ).to.not.be.an.instanceof( D );
		expect( d ).to.be.an.instanceof( C );
		expect( d ).to.be.an.instanceof( D );
		expect( c ).to.be.an.instanceof( Object );
		expect( d ).to.be.an.instanceof( Object );		
	} );

	it( 'should match regular expressions', function() {
		expect( 'John' ).to.match( /^(John|Jack)$/ );
	} );

	it( 'should contain a substring', function() {
		expect( 'John' ).to.have.string( 'hn' );
	} );

	
} );


