module('Function');

test('Basic requirements', function () {
    expect(1);
    ok(Function.prototype.bind, 'Function.bind()');
});

//TODO(berker): Helper
var x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();

var getX = module.getX;
getX();

var boundGetX = getX.bind(module);
boundGetX();

test('bind()', function () {
    expect(3);
    equal(module.getX(), 81, 'Creating a bound function.');
    equal(getX(), 9, '"this" refers to the global object.');
    equal(boundGetX(), 81, 'Create a new function with "this" bound to module.');
});