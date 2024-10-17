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
