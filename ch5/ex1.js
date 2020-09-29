false || (true && false);
// false

true || (1 + 2)
// true, short circuits since first operand evaluates to true

(1 + 2) || true;
// 3 since first operand evaluates to 3 and that is a truthy value

true && (1 + 2)
// both are true so evaluates to true

false && (1 + 2)
// first operand is false so short-circuits and evaluates to false

(1 + 2) && true;
// true

(32 * 4) >= 129
// false, 128 is <=

false !== !true;
// false, false does equal false

true === 4;
// false, strict equality compares both the value and the type

false === (847 === '847')
// true, the second operand evaluates to false since one is a number and the other is a string

false === (847 == '847')
// false, the second operand uses non-strict equality so it evaluates to true and false is not equal to true

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// true
