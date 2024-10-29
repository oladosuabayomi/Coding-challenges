// CODING CHALLENGE #1

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


const pointOneDolphins = 97;
const pointTwoDolphins = 112;
const pointThreeDolphins = 101;

const pointOneKoalas = 109;
const pointTwoKoalas = 95;
const pointThreeKoalas = 106;

const averagePointDolphins = (pointOneDolphins + pointTwoDolphins + pointThreeDolphins) / 3;
const averagePointKoalas = (pointOneKoalas + pointTwoKoalas + pointThreeKoalas) / 3;
console.log(averagePointDolphins, averagePointKoalas);


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
const minimumSocre = 100;

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