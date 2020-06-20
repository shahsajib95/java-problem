var marks = [50, 85, 70, 63, 84];
var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var total = marks[i];
    if(total > marks){
        total = marks;
    }
}
console.log("Highest marks is: ", total)