// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
//   and height in meter).

const nameM = "Mark";
const nameJ = "John";

let heightM1 = 1.69;
let weightm1 = 78;
let heightM2 = 1.88;
let weightm2 = 95;

let heightJ1 = 1.95;
let weightJ1 = 92;
let heightJ2 = 1.76;
let weightJ2 = 85;

const BMIMark = (weightm1 / heightM1 ** 2).toFixed(1);
// console.log(BMIMark);
const BMIJohn = (weightJ1 / heightJ1 ** 2).toFixed(1);
// console.log(BMIJohn);
// console.log(BMIMark, BMIJohn);

// let BMIMark2 = weightm2 / (heightM2 * heightM2);
// let BMIJohn2 = weightJ2 / (heightJ2 * heightJ2);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's ? - " + markHigherBMI);

// let MarkDescript =
//   nameM +
//   "'s height is " +
//   heightM1 +
//   "m and he weigh " +
//   weightm1 +
//   "kg so his BMI is " +
//   BMIMark;
// console.log(MarkDescript);

// let JohnDescript =
//   nameJ +
//   "'s height is " +
//   heightJ1 +
//   "m and he weigh " +
//   weightJ1 +
//   "kg so his BMI is " +
//   BMIJohn;

// console.log(JohnDescript);

if (BMIMark > BMIJohn) {
  console.log(
    `${nameM}'s BMI(${BMIMark}) is higher than ${nameJ}'s(${BMIJohn})!`
  );
} else {
  console.log(
    `${nameJ}'s(${BMIJohn}) BMI is higher than ${nameM}'s(${BMIMark})!`
  );
}
