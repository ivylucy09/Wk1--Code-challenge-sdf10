const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// PAYE rates as per the provided link
const payeRates = [
    { min: 0, max: 24000, deduction: 10 },
    { min: 24000, max: 32333.33, deduction: 25 },
    { min: 32333.33, max: 499999.99, deduction: 30 },
    { min: 500000.00, max: 7999999.99, deduction: 32.5 },
    { min: 8000000.00, max: Infinity, deduction: 35 }
];

function getTaxRate(salary) {
    for (let rate of payeRates) {
        if (salary > rate.min && salary <= rate.max) {
            return rate.deduction;
        }
    }
    return 0;
}

function salaryAfterPaye(salary) {
    const rate = getTaxRate(salary) / 100;
    const taxable = salary * rate;
    const netSalary = salary - taxable;
    return netSalary;
}

function nhifDeductable(salary) {
    if (salary < 6000) return 150;
    if (salary < 8000) return 300;
    if (salary < 12000) return 400;
    if (salary < 15000) return 500;
    if (salary < 20000) return 600;
    if (salary < 25000) return 750;
    if (salary < 30000) return 850;
    if (salary < 35000) return 900;
    if (salary < 40000) return 950;
    if (salary < 45000) return 1000;
    if (salary < 50000) return 1100;
    if (salary < 60000) return 1200;
    if (salary < 70000) return 1300;
    if (salary < 80000) return 1400;
    if (salary < 90000) return 1500;
    if (salary < 100000) return 1600;
    return 1700;
}

function nssfDeductable() {
    // As per KRA, NSSF is fixed at Ksh 200 for both the employee and employer contribution
    return 200;
}

function netSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const afterPaye = salaryAfterPaye(grossSalary);
    const nhif = nhifDeductable(grossSalary);
    const nssf = nssfDeductable();
    const netSalary = afterPaye - nhif - nssf;
    return netSalary;
}

function main() {
    rl.question("Enter your basic salary: ", (basicSalary) => {
        let basic = parseInt(basicSalary);
        if (isNaN(basic)) {
            console.log("Please enter a valid number for basic salary.");
            main();
            return;
        }

        rl.question("Enter your benefits: ", (benefits) => {
            let ben = parseInt(benefits);
            if (isNaN(ben)) {
                console.log("Please enter a valid number for benefits.");
                main();
                return;
            }

            const net = netSalary(basic, ben);
            console.log(`Your net salary is: Ksh ${net.toFixed(2)}`);

            rl.close();
        });
    });
}

main();
