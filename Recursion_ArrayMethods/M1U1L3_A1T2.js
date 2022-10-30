// Module 1, Unit 1, Lesson 3, Assignment 1, Task 2
// Reverse the Array of Invoices

let InvoiceList = [
    "Invoice 008 ",
    "Invoice 007 ",
    "Invoice 006 ",
    "Invoice 005 "
];

function insertToBottom() {    
    let lastLoc = InvoiceList[InvoiceList.length -1];    
    if (InvoiceList.length === 0 ) {
        return console.log("All Invoices from InvoiceList Posted to the newArray."),
            console.log(newArray.join(""));
    } else {
        insertToBottom (
        newArray.push(lastLoc),
        InvoiceList.pop(lastLoc),
        )}        
        return insertToBottom;
}

function reverseList() {
    let lastLoc = InvoiceList[InvoiceList.length -1];    
    if (InvoiceList.length === 0 ) {
        return console.log("All Invoices from InvoiceList Posted to the newArray in Reverse"),
            yarraWen.reverse(),
            console.log(yarraWen.join(""));
    } else {
        reverseList (
        yarraWen.push(lastLoc),
        InvoiceList.pop(lastLoc)
        )
    } 
        return reverseList;       
};

InvoiceList.push(
    "Invoice 004 ",
    "Invoice 003 ",
    "Invoice 002 ",
    "Invoice 001 ",
);

let newArray = [];
let yarraWen = [];
let insertToBottomFunc = insertToBottom;
let reverseStack = reverseList;

console.log(InvoiceList);
console.log();
// insertToBottomFunc();
// console.log();
// console.log(InvoiceList);
// console.log();
reverseStack();