const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed(speed) {
    if (speed < 70) {
        return "Ok";
    }

    let diff = speed - 70;
    let points = Math.floor(diff / 5);

    if (points > 12) {
        return "License suspended";
    }

    return `Points: ${points}`;
}

function main() {
    rl.question("Enter your speed: ", (speed) => {
        let s = parseInt(speed);
        if (isNaN(s)) {
            console.log("Please enter a number");
            main();
            return;
        }
        console.log(checkSpeed(s));
        rl.close();
    });
}

main();
