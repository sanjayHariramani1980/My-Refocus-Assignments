// bankAccount, which is the objeect from Task 1
// debitCard, which is a debt card number
// firstName,
// lastName,
// birthDate,
// validID, an array of ID and ID Number
// address



let bankAccount = {
    bankAccountID  : 0,                                         // number
    accountNumber : 001112223333,                               // number
    credentials : [                                             // array open
        userName = "JohnD",                                     // string
        password = "Refocus63",                                 // string
        pin =   1234                                            // number
        ],                                                      // array close
    balance : 2000,                                             // number
    createdAt : "October 15th 2022"                             // string
}

let userAccount = {
    bankAccount,                                                // calls a another object                       
    debitCard : 1111222233334444,                               // number
    firstName : "John",                                         // string
    lastName : "Doe",                                           // string
    birthDate : "January 19th 1980",                            // string
    validID : ["Passport", "Driver's License"][0,0],            // array
    address : "Banilad, Mandaue City, Cebu, Philippines, 6014"  // string
}

console.log(`userAccount is an ${typeof userAccount}`);