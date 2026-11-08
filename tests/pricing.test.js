const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('member pays 20% off ticket price, fee unchanged', function () { assertEq(calcTotal(2, true), 584); });
test('member may buy up to 4', function () { assertEq(maxTickets(true), 4); });
test('member over quota returns null', function () { assertEq(calcTotal(5, true), null); });
test('quantity below 1 returns null', function () { assertEq(calcTotal(0, false), null); });
test('regular over quota returns null', function () { assertEq(calcTotal(9, false), null); });