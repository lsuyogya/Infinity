const themeBtn = document.getElementById('colorTheme');
themeBtn.addEventListener('click', () => {
  document.querySelector('body').toggleAttribute('dark');
});
const fontPlusBtn = document.getElementById('fontPlus');
fontPlusBtn.addEventListener('click', () => {
  const bodyStyles = getComputedStyle(document.body);
  const fontFactor =
    parseFloat(bodyStyles.getPropertyValue('--fontFactor').trim()) ?? 1;
  document.body.style.setProperty('--fontFactor', fontFactor + 0.1);
});
const fontMinusBtn = document.getElementById('fontMinus');
fontMinusBtn.addEventListener('click', () => {
  const bodyStyles = getComputedStyle(document.body);
  const fontFactor =
    parseFloat(bodyStyles.getPropertyValue('--fontFactor').trim()) ?? 1;
  document.body.style.setProperty('--fontFactor', fontFactor - 0.1);
});

// ACCORDION
const btnArray = document.querySelectorAll('.accordion-button');
btnArray.forEach((btn) =>
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.getAttribute('data-bs-target'));
    if (target) {
      target.classList.toggle('show');
      const currentAttr = btn.getAttribute('aria-expanded') ?? 'false';
      if (currentAttr == 'true') {
        btn.setAttribute('aria-expanded', 'false');
      } else {
        btn.setAttribute('aria-expanded', 'true');
      }
    }
  })
);
