// Module 1, Unit 1, Lessor 2, Assignment 2, Task 1
// create a feature which allows user to check balance, withdraw or deposit funds using a closure


// initial starting value and identifies user name = FUNC1(func2, func3)
function createBankAccount(name){
    let balance = 0;  // initial starting value
    console.log(`:Hello ${name}, your account balance is now ₱${balance}.00.`)  // statement confirming initial value

    // inner function to ADD deposit to the previous balance = func1(FUNC2, func3)
    function depositAmount(amount){
        balance += amount; // formula which instructs code to add the deposit amount to the previous balance and return an updated balance
        console.log(`:Hello ${name}, your deposit of ₱${amount}.00 has been added.  Your account balance is now ₱${balance}.00.`)
    }

    // following function to SUBTRACT withdawals from the last updated balance = (func1(fun2, FUNC3)
    function withdrawAmount(amount){  // we use if and else statements to set criteria for the withdraw amount allowed
        if (amount >= balance) {  // forumla and result (conosle.log) should the value be lesser than (or equal to) avaiable balance
            console.log(":Insufficient Funds to perform Withdraw Transaction")
        }
        else {balance -= amount; // formula and result (console.log) should value be greater than (or equal to) available balance and returns an updated balance
             console.log(`:Hello ${name}, your withdrawal of ₱${amount}.00 has been subtracted. Your account balance is now ₱${balance}.00.`)
        }
    };       
    
    // we use the return command to returnt the values back to the initial caller FUNC1
    return {
        depositAmount,
        withdrawAmount
            }          
}

let date = new Date;  // Testing a new command to give an unique identifier for the latest transaction
console.log(`Date/Time of LAST Transaction: ${date}`)
console.log()
let currentBalance = createBankAccount("Sanjay")  // helps shorten the code for a particular user

currentBalance.depositAmount(4500)  // FUNC1 calling the inner function FUNC2 with value for deposit
currentBalance.withdrawAmount(500) // FUNC1 calling the inner function FUNC3 with value for withdrawal
currentBalance.withdrawAmount(5000)
currentBalance.withdrawAmount(800)