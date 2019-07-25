/*---------------------Example 1------------------------*/

/*Создайте функцию которая бы умела делать:
    minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.*/

function minus(a = 0) {
    return function result(b = 0) {
        return a - b;
    }
}

console.log(minus(5)(6));


/*---------------------Example 2------------------------*/

/*    Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
    function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)*/

function multiplyMaker(value) {
    let a = value;
    return function (num) {
        return a *= num;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

/*---------------------Example 3------------------------*/

/*3. Реализовать модуль, который работает со строкой и имеет методы:
    a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке

b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
    модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5*/

const stringModule = (function () {

    let data = '';

    function setString(val) {
        if (val === undefined) {
            return ''
        } else if (typeof val === 'number') {
            return val + ''
        }
        return data = val;
    }

    function getString() {
        return data
    }

    function getLengthString() {
        return data.length
    }

    function reverseString(val) {
        return val.split('').reverse().join('');
    }

    return {
        setString,
        getString,
        getLengthString,
        reverseString
    };
}());


console.log(stringModule.setString('abcde'));
console.log(stringModule.getString());
console.log(stringModule.getLengthString());
console.log(stringModule.reverseString('abcde'));


/*---------------------Example 4------------------------*/
/*Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:
    модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100*/

const calculator = (function () {

    let data = 0;

    function setNumber(val) {
        data = val;
        return this;
    }

    function addition(val) {
        data += val;
        return this;
    }

    function minus(val) {
        data -= val;
        return this;
    }

    function multiplication(val) {
        data *= val;
        return this;
    }

    function power(val) {
       data = Math.pow(data, val);
        return this;
    }

    function getResult() {
        return data.toFixed(2);
    }

    return {
        setNumber,
        addition,
        minus,
        multiplication,
        getResult,
        power
    };
})();


console.log(calculator.setNumber(10));
console.log(calculator.addition(5));
console.log(calculator.multiplication(2));
console.log(calculator.getResult());

console.log(calculator.setNumber(10).power(2).getResult());
