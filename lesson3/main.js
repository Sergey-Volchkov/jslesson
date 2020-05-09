'use sctrict';

var money, time;

function start() {
    money = Number(prompt("Ваш бюджет на месяц?", ''));
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    console.log(money.length);
    while (isNaN(money) || money == '' || money == null) {
        money = Number(prompt("Ваш бюджет на месяц?", ''));

    }
}
start();
var appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = Number(prompt("Во сколько обойдется?", ''));
        console.log(a);
        console.log(b);
        // Так как перевод в число выполняется сразу после ввода значений от пользователя,
        // то необходимо проверить b на NaN, что и делается при помощи b === b
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && b === b && a != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('try again');
            //если нужно вернуться к текущему вопросу заново
            i = i - 1;
            console.log(i);
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = Number((appData["budget"] / 30).toFixed());
    alert("Ваш бюджет на 1 день составляет:" + String(appData["budget"]) / 30);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay >= 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log("Произошла ошибка");
    }
}

console.log(appData.expenses)
function checkSavings() {
    if (appData.savings == true) {
        let save = Number(prompt("Какова сумма накоплений?")),
            percent = Number(prompt("Под какой процент?"));
        appData.monthIncome = save / 100 /12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses (i){
    let a = prompt("Статья необязательных расходов?", '');
    if (typeof (a) === 'string' && typeof (a) != null && a.length < 50) {
        appData.optionalExpenses[i] = a;
    } else {
        console.log('try again');
        //если нужно вернуться к текущему вопросу заново
        i = i - 1;
        console.log(i);
    }
}
for (let i = 1; i < 4; i++) {
    chooseOptExpenses(i);
}