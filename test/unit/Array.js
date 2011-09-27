module('Array');

test('Basic requirements', function () {
    expect(10);
    ok(Array.isArray, 'Array.isArray()');
    ok(Array.prototype.indexOf, 'Array.prototype.indexOf()');
    ok(Array.prototype.lastIndexOf, 'Array.prototype.lastIndexOf()');
    ok(Array.prototype.forEach, 'Array.prototype.forEach()');
    ok(Array.prototype.map, 'Array.prototype.map()');
    ok(Array.prototype.every, 'Array.prototype.every()');
    ok(Array.prototype.filter, 'Array.prototype.filter()');
    ok(Array.prototype.some, 'Array.prototype.some()');
    ok(Array.prototype.reduce, 'Array.prototype.reduce()');
    ok(Array.prototype.reduceRight, 'Array.prototype.reduceRight()');
});

test('isArray()', function () {
    expect(12);
    // All following calls return true.
    equal(Array.isArray([]), true, 'Array.isArray([])');
    equal(Array.isArray([1]), true, 'Array.isArray([1])');
    equal(Array.isArray(new Array()), true, 'Array.isArray(new Array())');
    equal(Array.isArray(Array.prototype), true, 'Array.isArray(Array.prototype)');
    // All following calls return false.
    equal(Array.isArray(), false, 'Array.isArray()');
    equal(Array.isArray({}), false, 'Array.isArray({})');
    equal(Array.isArray(null), false, 'Array.isArray(null)');
    equal(Array.isArray(undefined), false, 'Array.isArray(undefined)');
    equal(Array.isArray(42), false, 'Array.isArray(42)');
    equal(Array.isArray('Array'), false, 'Array.isArray(\'Array\')');
    equal(Array.isArray(true), false, 'Array.isArray(true)');
    equal(Array.isArray(false), false, 'Array.isArray(false)');
});

test('indexOf()', function () {
    expect(2);
    var array = [2, 5, 9];
    var index = array.indexOf(2);
    equal(index, 0, 'The following example uses indexOf to locate values in an array.');
    index = array.indexOf(7);
    equal(index, -1, 'The following example uses indexOf to locate values in an array.');
});