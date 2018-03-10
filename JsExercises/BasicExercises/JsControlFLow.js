/**
 * Created by DevMiau on 10-Mar-18.
 */
/*1. Write a JavaScript program that accept two integers and display the larger*/

function larger(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

larger(10, 5);

function product(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum > 0 ? 'The sign is +' : 'The sign is -';
};

product(3, -7, 2);

function checkEven(){
    for(let i=0; i < 15; i++){
        if(i % 2 === 0) {
            console.log('Number is even');
        }else {
            console.log('Number is odd');
        }
    }
}

function studentAverage(student, mark){
    switch(mark){
        case mark < 60 mark >= 60:
            return student + ' Grade is F';
            break;
        case mark < 70 && mark >= 60:
            return student + ' Grade is D';
            break;
        case mark < 80 && mark >= 70:
            return student + ' Grade is C';
            break;
        case mark < 90 && mark >= 90:
            return student + ' Grade is B';
            break;
        case mark < 100:
            return student + ' Grade is A';
            break;
        default:
            return 'Something went wrong';
    }
}

studentAverage('Mark', 71);