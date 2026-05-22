'use strict'

let input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', function(event) {
        if (input[i].value === '5' || input[i].value === '4') {
            input[i].value = 'Спасибо за такую высокую оценку!';
        }
        else if (input[i].value === '3' || input[i].value === '2' || input[i].value === '1') {
            input[i].value = 'Спасибо за вашу критику!';
        }
    });
}
