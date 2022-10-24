function equivalentCheck() {//This lets the last value remain in view untill other buttons are pressed

    if (parseInt(document.getElementById("equivalent").value))
        {
            document.getElementById("equivalent").value = 0;
            document.getElementById("result").value = 0;
        }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById("result").value);

    if (document.getElementById("decimalVar").value == 0) 
        {
            x += y * 10;//Multiply the text input by 10 and add the value of x

            document.getElementById("result").value = x;//Return x to the text output
        }
    else //If decimal is true
        {
            let decimalCount = parseInt(document.getElementById("decimalVar").value);

           if (decimalCount == 1) 
                {
                    x *= 1/10;//We are using math to place the decimal point
                    y += x;
                    document.getElementById("result").value = y;
                }
            else 
                {
                    document.getElementById("result").value += x;
                }

            decimalCount++;

            document.getElementById("decimalVar").value = decimalCount;
        }

}

function decimalPoint() {

    if (document.getElementById("decimalVar").value == 0)//This prevents multiple decimal points
        {
            document.getElementById("decimalVar").value = 1;
        }

   /* if (parseInt(document.getElementById("operation").value))//If this is an empty string. It will return false
        {
            document.getElementById("result").value = 0;
        }*/
}

function operandCheck() {

    if (document.getElementById("operand").value == "")
        {
            document.getElementById("operand").value = document.getElementById("result").value;
           
            document.getElementById("equivalent").value = 1;
        }
    else
        {
            operatorCheck();
        }      
}

function operatorCheck() {

    let a = parseFloat(document.getElementById("operand").value);
    let b = parseFloat(document.getElementById("result").value);

    switch (parseInt(document.getElementById("operation").value)) {

        case 1:
            a += b;//Addition
            break;

        case 2:
            a -= b;//Subtraction
            break;

        case 3:
            a *= b;//Mutiplication
            break;

        case 4:
            a /= b;//Devision

    }

    document.getElementById("operand").value = a;
    //document.getElementById("result").value = a;
    document.getElementById("equivalent").value = 1;
}

function operator(x) {

    switch (x) {
        case 1:
            document.getElementById("operation").value = 1;//Addition
            break;
        
        case 2:
            document.getElementById("operation").value = 2;//Subtraction
            break;

        case 3:
            document.getElementById("operation").value = 3;//Mutiplication
            break;

        case 4:
            document.getElementById("operation").value = 4;//Devision
            break;
    }
    document.getElementById("decimalVar").value = 0;
    operandCheck();
}

function equals() {

    operator(parseInt(document.getElementById("operation").value));
    document.getElementById("result").value = document.getElementById("operand").value;
    document.getElementById("operand").value = "";
    document.getElementById("equivalent").value = 1;
    document.getElementById("decimalVar").value = 0;

}

function allClear() {

    document.getElementById("result").value = 0;//This gives the result window a value of 0
    document.getElementById("operand").value = "";
    document.getElementById("operation").value = 0;
    document.getElementById("equivalent").value = 0;
    document.getElementById("decimalVar").value = 0;
}

function plusminus() {

    let x = parseFloat(document.getElementById("result").value);//This will assign x to the valuse in the result window

    x *= -1;//This will change the value of x to a negitive

    document.getElementById("result").value = x;//This assigns the result window the value of x

}

function percent() {

    let x = parseFloat(document.getElementById("result").value);

    x *= 0.01;

    document.getElementById("result").value = x;
}

function square() {

    let x = parseFloat(document.getElementById("result").value);

    x *= x;

    document.getElementById("result").value = x;
}