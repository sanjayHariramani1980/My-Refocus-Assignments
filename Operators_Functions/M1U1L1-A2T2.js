// Assignment 2 Task 2: Tip Calculator
// Tip is 10% of the Meal Cost (Food Price)

// Total Bill valued at P300.00
function computeTip(totalBill){
    let tip = (totalBill * 10) / 100;
    return tip
}
console.log(computeTip(300));
console.log(`Please pay P${computeTip(300)} as 10% service fee.`);