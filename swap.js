
var a = 5;
var b = 7;
//console.log("before swap: a=", a, "b =", b);

var temp = a;
a = b;
b =temp;
//console.log("before swap: a=", a, "b =", b);

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
//console.log("before swap: a=", a, "b =", b)

var p = 5;
var q = 7;

[p, q] = [q, p];
console.log("before swap: p=", p, "q =", q);
