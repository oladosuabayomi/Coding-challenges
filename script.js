// CODING CHALLENGE #1

// Coding Challenge () tip calculator
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// console.log(tip);



// DATA 1

/* const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95; */

// DATA 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
// }

// CODING CHALLENGE #2
// Data 1
// const pointOneDolphins = 96;
// const pointTwoDolphins = 108;
// const pointThreeDolphins = 89;

// const pointOneKoalas = 88;
// const pointTwoKoalas = 91;
// const pointThreeKoalas = 110;

// Data Bonus 1
// const pointOneDolphins = 97;
// const pointTwoDolphins = 112;
// const pointThreeDolphins = 101;

// const pointOneKoalas = 109;
// const pointTwoKoalas = 95;
// const pointThreeKoalas = 123;


// const pointOneDolphins = 97;
// const pointTwoDolphins = 112;
// const pointThreeDolphins = 101;

// const pointOneKoalas = 109;
// const pointTwoKoalas = 95;
// const pointThreeKoalas = 106;

// const averagePointDolphins = (pointOneDolphins + pointTwoDolphins + pointThreeDolphins) / 3;
// const averagePointKoalas = (pointOneKoalas + pointTwoKoalas + pointThreeKoalas) / 3;
// console.log(averagePointDolphins, averagePointKoalas);


// if (averagePointDolphins > averagePointKoalas) {
//     console.log(`Team Dolphins is the winner 🎉🎉`);
// } else if (averagePointDolphins === averagePointKoalas) {
//     console.log(`It is a draw. No winner!`);
// } else {
//     console.log(`Team Koalas is the winner 🎉🎉`);
// }


// Bonus 1
// const minimumSocre = 100;

// if (averagePointDolphins > averagePointKoalas && averagePointDolphins >= minimumSocre) {
//     console.log(`Team Dolphins is the winner 🎉🎉`);
// } else if (averagePointKoalas > averagePointDolphins && averagePointKoalas >= minimumSocre) {
//     console.log(`Team Koalas is the winner 🎉🎉`);
// } else if (averagePointDolphins === averagePointKoalas) {
//     console.log(`It is a draw`);
// } else {
//     console.log(`No team wins the trophy 🏆`)
// }


// Bonus 2
/* const minimumSocre = 100;

if (averagePointDolphins > averagePointKoalas && averagePointDolphins >= minimumSocre) {
    console.log(`Team Dolphins is the winner 🎉🎉`);
} else if (averagePointKoalas > averagePointDolphins && averagePointKoalas >= minimumSocre) {
    console.log(`Team Koalas is the winner 🎉🎉`);
} else if (averagePointDolphins === averagePointKoalas && averagePointDolphins >= minimumSocre) {
    console.log(`It is a draw`);
} else if (averagePointKoalas === averagePointDolphins && averagePointKoalas >= minimumSocre) {
    console.log(`It is a draw`);
} else {
    console.log(`No team wins the trophy 🏆`)
}
 */

/* // Coding Challenge #4

// Get score data
let firstScoreDolphins = 85;
let secondScoreDolphins = 54;
let thirdScoreDolphins = 41;

let firstScoreKoalas = 23;
let secondScoreKoalas = 34;
let thirdScoreKoalas = 27;

// Calculate the average score
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageScoreKoalas = calcAverage(firstScoreKoalas, secondScoreKoalas, thirdScoreKoalas);
const averageScoreDolphins = calcAverage(firstScoreDolphins, secondScoreDolphins, thirdScoreDolphins);

// Check for the winner
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No team win!`)
    }
}

checkWinner(averageScoreKoalas, averageScoreDolphins);
 */


// Coding Challenge #5 tip calculator

// creating a fuction that calculates and output tip value
// const calcTip = function (bill) {
//     const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
//     return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[bills.length - 1])];


// console.log(tips)
// console.log(total)


// challenge #6
// const markMiller = {
//     fullName: `Mark Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;   // Object method
//         return this.BMI;
//     }
// };

// const johnSmith = {
//     fullName: `John Smith`,
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;   // Object method
//         return this.BMI;
//     }
// };

// console.log(markMiller.calcBMI());
// console.log(johnSmith.calcBMI());


// if (markMiller.BMI > johnSmith.BMI) {
//     console.log(`${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})`);
// } else {
//     console.log(`${johnSmith.fullName}'s BMI ${johnSmith.BMI} is higher than ${markMiller.fullName}'s ${markMiller.BMI}`);
// }

/*
// Challange #7 (Improving the tip calculator)
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? (15 / 100) * bills : (20 / 100) * bills;

}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum = sum + arr[j];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));

 */

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/* const arr = [17, 21, 23]; */

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// /* console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ... ${data1[3]}ºC`); */

// const printForecast = function (arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         str += `${arr[i]}ºC in ${[i + 1]} days ... `;
//         console.log(str);
//     }

//     console.log('...' + str);
// };
// printForecast(data1);


// stair case challage 
// console.log('.');
// console.log('..');

// const printRightSidedPyramid = function (height) {
//     let dot = '';
//     for (let i = 0; i < height; i++) {
//         dot += '.'
//         console.log(dot);
//     }
// };
const printPyramid = function (n) {
    const mid = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let line = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (col >= mid - row && col <= mid + row) {
                line += '#';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

printPyramid(5);

// printRightSidedPyramid(4);


// Simple user Authentication

