'use sctrict';

var money = Number(prompt("Ваш бюджет на месяц?",''));
var time = prompt("Введите дату в формате YYYY-MM-DD",'');


var appData = {
    "budget": money,
    "timeData": time,
    "expenses":{},
    "optionalExpenses":{},
    "income":[],
    "savings":null
}
// for (let i = 0;i<2;i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце",'');
//     let b= Number(prompt("Во сколько обойдется?",''));
//     console.log(a);
//     console.log(b);
//     // Так как перевод в число выполняется сразу после ввода значений от пользователя,
//     // то необходимо проверить b на NaN, что и делается при помощи b === b
//     if (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && b === b && a != '' && a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;
//     }else {
//         console.log('try again');
//         //если нужно вернуться к текущему вопросу заново
//         i = i-1;
//     console.log(i);
//     }
// }
//-----------------------------------------------------------------------------------------
// let i =0;
// while (i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",'');
//     let b= Number(prompt("Во сколько обойдется?",''));
//     console.log(a);
//     console.log(b);
//     // Так как перевод в число выполняется сразу после ввода значений от пользователя,
//     // то необходимо проверить b на NaN, что и делается при помощи b === b
//     if (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && b === b && a != '' && a.length < 50){
//         console.log('done');
//         appData.expenses[a] = b;
//     }else {
//         console.log('try again');
//         //если нужно вернуться к текущему вопросу заново
//         i--;
//     console.log(i);
//     }
//     i++
// }
//-----------------------------------------------------------------------------------------
let i =0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце",'');
    let b= Number(prompt("Во сколько обойдется?",''));
    console.log(a);
    console.log(b);
    // Так как перевод в число выполняется сразу после ввода значений от пользователя,
    // то необходимо проверить b на NaN, что и делается при помощи b === b
    if (typeof(a) === 'string' && typeof(a) != null  && typeof(b) != null && b === b && a != '' && a.length < 50){
        console.log('done');
        appData.expenses[a] = b;
    }else {
        console.log('try again');
        //если нужно вернуться к текущему вопросу заново
        i--;
    console.log(i);
    }
    i++;
} while (i<2);

appData.moneyPerDay = appData["budget"]/30;
alert("Ваш бюджет на 1 день составляет:" + String(appData["budget"])/30);
if (appData.moneyPerDay <100){
    console.log('Минимальный уровень достатка');
}else if (appData.moneyPerDay >= 100 && appData.moneyPerDay<2000){
    console.log('Средний уровень достатка');
}else if (appData.moneyPerDay >= 2000){
    console.log('Высокий уровень достатка');
}
console.log(appData.expenses)