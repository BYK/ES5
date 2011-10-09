module('Object');

test('Basic requirements', function () {
    expect(2);
    ok(Object.keys, 'Object.keys()');
    ok(Object.getPrototypeOf, 'Object.getPrototypeOf()');
});

test('keys()', function () {
    expect(2);
    var array = ['a', 'b', 'c'];
    var obj = { 0: 'a', 1: 'b', 2: 'c' };
    equal(Object.keys(array).toString(), '0,1,2', 'Returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.');
    equal(Object.keys(obj).toString(), '0,1,2', 'Array like object.');
});