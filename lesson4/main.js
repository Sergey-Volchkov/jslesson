'use sctrict';

var money, time;

function start() {
    money = Number(prompt("Ваш бюджет на месяц?", ''));
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
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
    "savings": true,
    chooseExpenses: function() {
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
            }
        }
    },
    detectDayBudget: function() {appData.moneyPerDay = Number((appData["budget"] / 30).toFixed());
    alert("Ваш бюджет на 1 день составляет:" + String(appData["budget"]) / 30);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay >= 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = Number(prompt("Какова сумма накоплений?")),
                percent = Number(prompt("Под какой процент?"));
            appData.monthIncome = save / 100 /12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function  (){
        for (let i = 1; i < 4; i++) {

            let a = prompt("Статья необязательных расходов?", '');
            if (typeof (a) === 'string' && typeof (a) != null && a.length < 50) {
                appData.optionalExpenses[i] = a;
            } else {
                console.log('try again');
                //если нужно вернуться к текущему вопросу заново
                i = i - 1;
            }
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесёт дополнительный доход? (перечислите через запятую)', "");
        if (typeof (items) === 'string' && typeof (items) != null && items != '') {
            temp = items.split(', ');
            for (item of temp){
                    appData.income.push(item);
                }
            if (temp.length > 0){
                buf = (prompt("Может что-то ещё?"));
                if (typeof (buf) === 'string' && typeof (buf) != null && buf != '')
                    appData.income.push(buf);
                appData.income.sort();
            }
        } else {
            appData.chooseIncome();
            return;
        }
        console.log("Способы доп. заработка: ");
        appData.income.forEach((element,i) => {
            console.log(i+1 + ": " + element);

        });
    }
    
}
appData.chooseIncome();
console.log("Наша программа включает в себя данные:");
for (key in appData){
    console.log(key + ": "+ appData[key]);
}



