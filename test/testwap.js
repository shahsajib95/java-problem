var a = 10;
var b = 7;

var temp = b;
b = a;
a = temp;
//console.log( "after swap: a = ", a,"b = ", b)

var s = 8;
var a = 6;

s = s + a;
a = s - a;
s = s - a;
console.log("after swap: s = ", s, "a = ", a);