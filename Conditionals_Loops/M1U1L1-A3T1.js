// Assignment 3 Task 1: Pulse Oximeter Reading (Part 1)

var sp02 = "asd";

function observation(sp02){
    if ( sp02 >= 96){
        console.log(`Your result is ${sp02}. Normal Reading.`);
    } else if (sp02 === 95) {
        console.log(`Your result is ${sp02}. Acceptable to continue home monitoring`);
    } else if ((sp02 >= 93) && (sp02 <= 94)){
        console.log(`Your result is ${sp02}. Seek advice from health professionals.`);
    } else if ( sp02 <= 92) {
        console.log(`Your result is ${sp02}. Seek urgent medical advice.`);
    }   else {
        console.log(`Your result is ${sp02}. incorrect value entered.`);
    }
    }
    observation(sp02);