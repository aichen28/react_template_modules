// Generated by CoffeeScript 1.6.3
var objectToSaneObject;

require('./_prepare');

objectToSaneObject = mod('objectToSaneObject');

describe("sanitize()");

test("case: 'text'", function() {
  var expectation, input, ret;
  input = 'text';
  expectation = ['text'];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});

test("case: ['text']", function() {
  var expectation, input, ret;
  input = ['text'];
  expectation = ['text'];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});

test("case: {a:b}", function() {
  var expectation, input, ret;
  input = {
    a: 'b'
  };
  expectation = [
    {
      a: ['b']
    }
  ];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});

test("case: {a:[b: 'c']}", function() {
  var expectation, input, ret;
  input = {
    a: [
      {
        b: 'c'
      }
    ]
  };
  expectation = [
    {
      a: [
        {
          b: ['c']
        }
      ]
    }
  ];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});

test("case: {a:b: 'c'}", function() {
  var expectation, input, ret;
  input = {
    a: {
      b: 'c'
    }
  };
  expectation = [
    {
      a: [
        {
          b: ['c']
        }
      ]
    }
  ];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});

test("case: {a:b: ['c', d: 'e']}", function() {
  var expectation, input, ret;
  input = {
    a: {
      b: [
        'c', {
          d: 'e'
        }
      ]
    }
  };
  expectation = [
    {
      a: [
        {
          b: [
            'c', {
              d: ['e']
            }
          ]
        }
      ]
    }
  ];
  ret = objectToSaneObject.sanitize(input);
  return ret.should.be.like(expectation);
});
