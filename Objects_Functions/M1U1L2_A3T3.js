// getBankAccountDetails : which checks if the username and password are correct and shows the bank account details
// withdrawMoney : which checks if the username and password are correct and enables getting money from the bank account using the account number
// depositMoney : which allows putting money in the bank account using the account number

let bankAccount = {                         // object for bankAccount
    bankAccountID  : 0,
    accountNumber : 001112223333,
    credentials : [
        userName = "JohnD",
        password = "Refocus63",
        pin =   1234
        ],
    balance : 2000,
    createdAt : "October 15th 2022"
}

let userAccount = {                         // object for userAccount
    bankAccount,
    debitCard : 1111222233334444,
    firstName : "John",
    lastName : "Doe",
    birthDate : "January 19th 1980",
    validID : ["Passport", "Driver's License"][0,0],
    address : "Banilad, Mandaue City, Cebu, Philippines, 6014"
}

// a test to see if the code for the checking username and password works.
function verifyCredentials(userName, password) {
    if (userName === bankAccount.credentials[0] && password === bankAccount.credentials[1]) {
        console.log(`Login Successful. Hello ${userAccount.firstName} ${userAccount.lastName}.`);
    } else {
        console.log("Login Failed. Please check USERNAME and/or PASSWORD")
    }
}


// uses the format for verifyCredientials to provide Bank Account details from the userAccount object
function getAccountDetails(userName, password) {
    if (userName === bankAccount.credentials[0] && password === bankAccount.credentials[1]) {
        console.log(`Login Successful. Hello ${userAccount.firstName} ${userAccount.lastName}. Your Bank Details are as follows:`),
        console.log(userAccount.bankAccount);
    } else {
        console.log("Login Failed. Please check USERNAME and/or PASSWORD")
    }
}

// the accNumber must be entered correctly before a transaction can be performed.  if correct, the function's callback feature instructs the balance to change depending on whether a deposit or withdraw function is called.
function accountTransaction(accNumber, amount, callback) {
    if (accNumber === userAccount.bankAccount.accountNumber) {
        callback(amount)
        console.log(`:Hello ${userAccount.firstName} ${userAccount.lastName}. Your current balance is now ₱${userAccount.bankAccount.balance}.00`)
    } else {
        console.log("!! Invalid Input.  Please try again")
    }
}


function depositMoney(amount) {
        userAccount.bankAccount.balance += amount;
        console.log(`:New deposit transaction: ₱${amount}.00 has been added to your account.`)
}

// withdraw function does not allow funds to be withdrawn if funds are insufficient;
function withdrawMoney(amount) {
    if (userAccount.bankAccount.balance >= amount) { 
        userAccount.bankAccount.balance -= amount;
        console.log(`:New withdraw transaction: ₱${amount}.00 has been subtraced from your account.`);
    } else {
        console.log("!!Insufficient Funds to perform Withdraw Transaction");
    } 
}

getAccountDetails("JohnD","Refocus63");


accountTransaction(001112223333, 5000, depositMoney);
accountTransaction(00111222333, 1200, withdrawMoney);
accountTransaction(001112223333, 1200, withdrawMoney);
