const lock = document.querySelector('.lock-screen')
const main = document.querySelector('.main-site')

let startY = 0;

document.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 100) { // si desliza hacia arriba
    lock.classList.add('hidden');
    setTimeout(() => main.classList.add('active'), 400);
  }
});