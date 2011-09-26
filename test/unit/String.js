module('String');

test('Basic requirements', function() {
    expect(2);
    ok(String.prototype.trim, 'String.trim()');
    ok(String.prototype.toJSON, 'String.toJSON()');
});

test('trim()', function() {
    expect(3);
    var strings = ['   Lorem ipsum dolor sit amet.   ', '   Lorem ipsum dolor sit amet.', ' Lorem ipsum dolor sit amet.   '];

    equal(strings[0].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
    equal(strings[1].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
    equal(strings[2].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
});