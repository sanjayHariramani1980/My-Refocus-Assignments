// Module 1, Unit 1, Lessor 2, Assignment 2, Task 2
// create a feature which allows user to check balance, withdraw or deposit funds using a callback

let balance = 0;  // intial value for the balance


// function 1: the main function (caller) for the callback function.  designed to provide an updated balance
function createBankAccount(name, amount, callback) {
    callback(amount); // calls back the function to be executed (deposit or withdraw) and uses the amount to updated the balance
    console.log(`:Hello ${name}. Your current balance is now ₱${balance}.00`);
}

// function 2: the deposit function, using an amount value to adjust the balance before being called back to funcation 1.
function depositAmount(amount) {
    balance += amount; // updating the value of balance by adding a deposit
    console.log(`:New deposit transaction: ₱${amount}.00 has been added to your account.`)
}

// function 3: the withdraw function, using am amount value to adjust the balance before being called back to function 2.
function withdrawAmount(amount) {
    if (balance > amount) {  // setting the condition that prevents a negative balance
        balance -= amount;
        console.log(`:New withdraw transaction: ₱${amount}.00 has been subtraced from your account.`);
    } else {
        console.log(":Insufficient Funds to perform Withdraw Transaction");
    } 
}

// using function 1, we difine the action by providing the reqiured values, name/string, amount/value, callback/(deposit or withdraw)
createBankAccount("Sanjay",2000,depositAmount);
console.log() // used to make a space between records, so we can read clearly
createBankAccount("Sanjay",1300,withdrawAmount);
console.log()
createBankAccount("Sanjay",1000,withdrawAmount);
console.log()
createBankAccount("Sanjay",1250,depositAmount);