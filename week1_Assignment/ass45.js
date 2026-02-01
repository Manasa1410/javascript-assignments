/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter() all credit transactions
let res1=transactions.filter(t=>t.typr==="credit")
console.log(res1)

//map() to extract only transaction amounts
let res2=transactions.map(t=>t.amount)
console.log(res2)

//reduce() to calculate final account balance
const res3 = transactions.reduce((balance, t) => {
  if (t.type === "credit") {
    return balance + t.amount;
  } else {
    return balance - t.amount;
  }
}, 0);
console.log(res3);

//find() the first debit transaction
const res4 = transactions.find(t => t.type === "debit");
console.log(res4);

//findIndex() of transaction with amount 10000
const res5 = transactions.findIndex(t => t.amount === 10000);
console.log(res5);

