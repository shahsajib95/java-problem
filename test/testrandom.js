var luddo = 5.5454;

var floor = Math.floor(luddo);
var ceil = Math.ceil(luddo);
console.log(ceil);

for(var i = 0; i < 10; i++){
    var shake = Math.random() * 6;
    var result = Math.round(shake);

    console.log(result);
}