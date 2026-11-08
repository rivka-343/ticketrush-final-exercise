const { joinWaitlist } = require('../js/waitlist');

test('adds a normalized email', function () {
  assertEq(JSON.stringify(joinWaitlist([], '  Dana@Example.COM ')), JSON.stringify(['dana@example.com']));
});
test('does not mutate the original list', function () {
  const list = ['a@b.co'];
  joinWaitlist(list, 'c@d.co');
  assertEq(list.length, 1);
});
test('invalid email leaves list unchanged', function () {
  assertEq(joinWaitlist(['a@b.co'], 'no-at-sign').length, 1);
  assertEq(joinWaitlist(['a@b.co'], 'x@nodot').length, 1);
});
test('duplicate email is not added twice', function () {
  assertEq(joinWaitlist(['a@b.co'], ' A@B.CO ').length, 1);
});