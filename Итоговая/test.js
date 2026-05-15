'use strict'

document.addEventListener('DOMContentLoaded', function() {
  let testBtns = document.querySelectorAll('.test-btn');
  let testResult = document.querySelector('.test-result');
  let testOptions = document.querySelector('.test-options');

  testBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      let score = parseInt(this.getAttribute('data-score'));
      
      if (score >= 4) {
        testResult.textContent = 'Спасибо за то что цените мой проект! Мне очень приятно! :)';
      } else {
        testResult.textContent = 'Спасибо за критику, чтобы я мог улучшить свой результат, напишите на мою почту, которую вы можете найти на главной странице!';
      }
      
      testResult.style.display = 'block';
      testOptions.style.display = 'none';
    });
  });
});
