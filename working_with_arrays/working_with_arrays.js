'use stricst';

// bankitst app

// data

const account1 = {
    ower: 'jonas schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, //%
    pin: 1111,
};

const account2 = {
    ower: 'jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5, //%
    pin: 2222,
};

const account3 = {
    ower: 'Steven thomas williams',
    movements: [200, -200, -340, -300, -20, 50, 400, -4680],
    interestRate: 0.7, //%
    pin: 3333,
};

const account4 = {
    ower: 'sarah smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1, //%
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//elements
const labelWelcome = document.querySelector('.wellcome');
const labelDate = document.querySelector('.Date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.Summary_value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');

const btnTransfer = document.querySelector('.form_btn_transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');
const inputTransferTo = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_inpu--loan--amount');
const inputCloseUsername = document.querySelector('.form_input--user');
const inputClosePin = document.querySelector('.form_input--pin');

// lectures
// const currencies = new Map([
//     ['USD', 'United States', 'dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2))
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //reverse
// arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join

// console.log(letters.join('-'));




// const abc = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //for (const movement of movements){}
// for (const [i, movement] of movements.entries()) {
//     if (movements > 0) {
//         console.log(`movement ${i + 1}: you deposited 
//         ${movement}`);
//     }
//     else {
//         console.log(`movement ${i + 1}: you withdrew 
//         ${Math.abs(movement)}`);
//     }
// }

// console.log('----FOREACH----');
// movements.forEach(function (movement, index, array) {
//     if (movement > 0) {
//         console.log(`movement ${i + 1}: you deposited 
//         ${movement}`);
//     }
//     else {
//         console.log(`movement ${i + 1}: you withdrew 
//         ${Math.abs(movement)}`);
//     }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


//map
const currencies = new Map([
    ['USD', 'United States', 'dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})
//map

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}:${value}`);
});

