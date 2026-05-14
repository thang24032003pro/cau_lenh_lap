const transactions = [150, -50, 200, -10, 500, 15000, -200, 300];

let totalIncome = 0;
for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] <= 0) continue;
    totalIncome += transactions[i];
}
console.log("Total Income:", totalIncome);

let hasFraud = false;
let j = 0;
while (j < transactions.length && !hasFraud) {
    if (transactions[j] > 10000) {
        hasFraud = true;
    }
    j++;
}
console.log("Fraud Detected:", hasFraud);

let attempts = 0;
let isSuccess = false;
do {
    attempts++;
    isSuccess = Math.random() > 0.8;
    console.log("Attempt " + attempts + ": " + (isSuccess ? "Success" : "Failed"));
} while (!isSuccess && attempts < 3);