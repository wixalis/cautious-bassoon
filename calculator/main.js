"use strict";

$(document).ready(function() {
    $('button').on('click', function(e) {
        console.log(e.target.innerHTML);
    });
});

let num1 = '';
let num2 = '';
let operator = '';
let total = '';
let show = '';

$(document).ready(function() {
    $('button').on('click', function(a) {
        let btn = a.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            assignNumber(btn);
            // console.log('number');
        } else if (btn == 'C') {
            clear();
        } else {
            assignOperator(btn);
            // console.log('operator');
        }
    });
});

function assignNumber(num) {
    if (num1 === '' || operator === '') {
        num1 = num1 + num;
        show = num1;
    } else {
        num2 = num2 + num;
        show = num1 + ' ' + operator + ' ' + num2;
    }
    display(num);
}

function assignOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        equate();
        operator = oper;
    }
    if (operator != '=') {
        show = num1 + ' ' + operator;
        display(operator);
    }

}

function display(btn) {
    $('.result').text(show);
}

function equate() {
    switch (operator) {
        case '+':   total = +num1 + +num2;
            break;
        case '-':   total = +num1 - +num2;
            break;
        case '*':   total = +num1 * +num2;
            break;
        case '/':   total = +num1 / +num2;
            break;
    }
    show = total;
    display(total);
    update();
    console.log(total);
}

function update() {
    num1 = total;
    num2 = '';
}

function clear() {
    num1 = '';
    num2 = '';
    total = '';
    operator = '';
    show = '0';
    display(0);
}