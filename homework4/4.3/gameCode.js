var answer, totalCash = 0;
var i = 0
for (i; i < questions.length; i++) {
    var question = questions[i];
    answer = +prompt('На вашем счету ' + totalCash + ' тугриков\n' + question.q + question.a1 + question.a2 + question.a3 + question.a4 + 'Ваш приз за правильный ответ ' + question.cash + ' тугриков');

    if (isAnswer(answer)) {
        if (answer == question.correct) {
            totalCash = question.cash + totalCash;
            alert('Поздравляю, ответ верный!!! Теперь на вашем счету ' + totalCash + ' тугриков');
        } else {
            alert('Неверный ответ. Вы проиграли.');
            break;
        }
    } else {
        break;
    }
}

if (i == questions.length) {
    alert('Поздравляю, вы победитель!!! Ваш выигрыш ' + totalCash + ' тугриков');
}

//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
