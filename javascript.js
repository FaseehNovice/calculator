function add( a , b ){
    return a + b;
}
function subtract(a , b){
    return a - b;
}
function multiply(a , b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate( a , opr , b){
    switch(opr){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        default:
            console.log("SYNTAX ERROR!")
    }
}
console.log(operate(2 ,'+', 3));