'use sctrict';

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
    "бюджет": money,
    "timeData": time,
    "expenses":{},
    "optionalExpenses":{},
    "income":[],
    "savings":null
}
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце”")] = Number(prompt("Во сколько обойдется?"));
appData.expenses[prompt("Введите обязательную статью расходов в этом месяце”")] = Number(prompt("Во склько обойдется?"));
var cost = 0;
for (element in appData["expenses"]){
    cost+=appData["expenses"][element];
    // console.log(appData["expenses"][element])
}
alert("Ваш бюджет на 1 день составляет:" + String(Number(money)/30))