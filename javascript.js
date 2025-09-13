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
btns = document.querySelectorAll("button");
displayScreen = document.querySelector("#display-screen")

let prev = null , curr = null , res = null , opr = '';

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (!isNaN(value)) {
            if (curr === null) curr = value;
            else if(curr == res) displayScreen.textContent = "";
            else curr += value; 
            displayScreen.textContent = curr;
        }

        else if (["+", "-", "*", "/"].includes(value)) {
            if (curr !== null) {
                prev = parseInt(curr);
                curr = null;
                opr = value;
                displayScreen.textContent = opr;
            }
        }

        else if (value === "=") {
            if (prev !== null && curr !== null && opr !== '') {
                res = operate(prev, opr, parseInt(curr));
                res = parseFloat(res.toFixed(1));
                displayScreen.textContent = res;
                curr = res;  
                prev = null;
                opr = '';
            }
        }

        else if (value === "C") {
            displayScreen.textContent = "";
            prev = curr = res = null;
            opr = '';
        }
    });
});