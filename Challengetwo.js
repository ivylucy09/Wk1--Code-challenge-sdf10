// Below 70 you are okay
// case 1 you are 75
// 75-70=5
// 5/5=1

//Case 80
//80-70=10
//10/5=2
const readline = require('readline');

let rl = readline.createInterface(
					process.stdin, process.stdout);

function checkspeed(speed) {
    if (speed > 100) {
        return true;}
        else {return false;
    }
}

function checkspeed(speed) {
    if (speed < 70) {
        return "ok";
    }
    let diff = speed-70;
    let point = math.ceil(diff/5);
}
if (point > 12) {
    return "License Suspended";
 } 
 return "Points Deducted" + point;
 function main() {
    rl.question("Enter your speed\n", (speed) => {
        let s=parseInt(speed);
        if (isNaN(s)) {
        console.log("Please enter a number \n");
            main();
         return;
         }
         console.log(checkspeed(s))
        });
        
        rl.close();
    };
    
    main();

