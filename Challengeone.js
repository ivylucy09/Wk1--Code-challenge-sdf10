const readline = require('readline');

//let rl = readline.createInterface(
					//process.stdin, process.stdout);


//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:
//- A > 79
//- B - 60 to 79
//- C - 59 to 49
//- D - 40 to 49
//- E - less than 40.

//const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    }
    if (marks >= 60 && marks <= 79) {
        return "B";
    }
    if (marks >= 50 && marks <= 59) {
        return "C";
    }
    if (marks >= 40 && marks <= 49) {
        return "D";
    }
    if (marks < 40) {
        return "E";
    }
}

function main() {
    rl.question("What is your mark (0 to 100)?\n", (score) => {
        let s = parseInt(score);

        // Validate input
        if (isNaN(s) || s < 0 || s > 100) {
            console.log("Please enter a number between 0 and 100.\n");
            rl.close();
            return;
        }

        let grade = calculateGrade(s);
        console.log('Your grade is: ' + grade + "\n");
        rl.close();
    });
}

main();

