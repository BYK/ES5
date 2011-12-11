module('Object');

test('Basic requirements', function () {
    expect(2);
    ok(Object.keys, 'Object.keys()');
    ok(Object.getPrototypeOf, 'Object.getPrototypeOf()');
});

test('keys()', function () {
    expect(3);
    var array = ['a', 'b', 'c'];
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    var hasOwnProp = {'a': 1, 'hasOwnProperty': 2};
    equal(Object.keys(array).toString(), '0,1,2', 'Returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.');
    equal(Object.keys(obj).toString(), '0,1,2', 'Array like object.');
    equal(Object.keys(hasOwnProp).toString(), 'a,hasOwnProperty', 'Does not get confused by a key named "hasOwnProperty".');
});

test('getPrototypeOf', function () {
    expect(1);
    var MyClass = function MyClass(){};
    var myObject = new MyClass();
    equal(Object.getPrototypeOf(myObject), MyClass.prototype, "Properly gives the prototype of the constructor.");
});