module('Date');

test('Basic requirements', function () {
    expect(2);
    ok(Date.prototype.toISOString, 'Date.prototype.toISOString()');
    ok(Date.prototype.toJSON, 'Date.prototype.toJSON()');
});

test('toISOString()', function () {
    expect(1);
    var today = new Date('10 October 2011 14:48 UTC');
    equal(today.toISOString(), '2011-10-10T14:48:00.000Z', 'Converts a date to a string following the ISO 8601 Extended Format.');
});

test('toJSON()', function () {
    expect(1);
    var today = new Date('10 October 2011 14:48 UTC');
    equal(today.toJSON(), '2011-10-10T14:48:00.000Z', 'Returns a JSON representation of the Date object.');
});