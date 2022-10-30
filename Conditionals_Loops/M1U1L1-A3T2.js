// Assignment 3 Task 2: Pulse Oximeter Reading (Part 2)

var pulseRate = 78;

function observation(pulseRate){
    if ((pulseRate > 39) && (pulseRate < 101)){
        console.log(`Your pulse rate is ${pulseRate}. Normal Reading.`);
    } else if ((pulseRate > 100) && (pulseRate < 110)){
        console.log(`Your pulse rate is ${pulseRate}. Acceptable to continue home monitoring.`);
    } else if ((pulseRate > 109) && (pulseRate < 131)){
        console.log(`Your pulse rate is ${pulseRate}. Seek advice from health professionals.`);
    } else if ((pulseRate >= 131)){
        console.log(`Your pulse rate is ${pulseRate}. Seek urgent medical advice.`);
    }  else {
        console.log(`Your result is ${pulseRate}. incorrect value entered.`);
    }
}

observation(pulseRate);
