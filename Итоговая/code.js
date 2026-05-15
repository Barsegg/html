'use strict'

let formConfigs = [
  {
    formId: 'secret-form',
    codeInputId: 'secret-code',
    messageId: 'secret-message',
    validCode: 'X3Ih9O#M2',
    redirectUrl: './uniunico.html'
  },
  {
    formId: 'rickroll-form',
    codeInputId: 'rickroll-code',
    messageId: 'rickroll-message',
    validCode: 'NEGOGIYOUP',
    redirectUrl: './Rickroll.html'
  }
];

formConfigs.forEach(({ formId, codeInputId, messageId, validCode, redirectUrl }) => {
  let form = document.getElementById(formId);
  let messageEl = document.getElementById(messageId);

  if (!form || !messageEl) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let
    
    
    code = document.getElementById(codeInputId).value.trim();

    if (code === validCode) {
      messageEl.textContent = 'Код принят! Перенаправляю...';
      messageEl.style.color = '#86efac';
      window.location.href = redirectUrl;
    } else {
      messageEl.textContent = 'Неверный код. Попробуйте ещё раз.';
      messageEl.style.color = '#fda4af';
    }
  });
});