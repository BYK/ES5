module('String');

test('Basic requirements', function() {
    expect(1);
    ok(String.prototype.trim, 'String.trim()');
});

test('trim()', function() {
    expect(3);
    var strings = ['   Lorem ipsum dolor sit amet.   ', '   Lorem ipsum dolor sit amet.', ' Lorem ipsum dolor sit amet.   '];

    equal(strings[0].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
    equal(strings[1].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
    equal(strings[2].trim(), 'Lorem ipsum dolor sit amet.', 'Trims the whitespace around the text.');
});