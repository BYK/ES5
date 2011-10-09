module('Function');

test('Basic requirements', function () {
    expect(1);
    ok(Function.prototype.bind, 'Function.bind()');
});

//TODO(berker): Helper
var x = 9; 
var _module = {
  x: 81,
  getX: function() { return this.x; }
};

_module.getX();

var getX = _module.getX;
getX();

var boundGetX = getX.bind(_module);
boundGetX();

test('bind()', function () {
    expect(3);
    equal(_module.getX(), 81, 'Creating a bound function.');
    equal(getX(), 9, '"this" refers to the global object.');
    equal(boundGetX(), 81, 'Create a new function with "this" bound to module.');
});