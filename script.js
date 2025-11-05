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

/*--------*/

function updateDateTime() {
  const now = new Date();

  // hora (12:05)
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;

  // fecha (Wed, Nov 5)
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);

  // actualiza todas las clases .realtime
  document.querySelectorAll('.realtime').forEach(el => {
    el.textContent = timeString;
  });

  // actualiza todas las clases .realdate
  document.querySelectorAll('.realdate').forEach(el => {
    el.textContent = dateString;
  });
}

// ejecuta una vez al cargar
updateDateTime();

// y cada 10 segundos
setInterval(updateDateTime, 10000);

/* notification panel */

const notifPanel = document.querySelector('.notification-panel');
const header =document.querySelector('.main-site header')


let sY = 0;
let endY = 0;

header.addEventListener('click', ()=>{
    notifPanel.classList.add('active')
})

// para touch
document.addEventListener('touchstart', e => {
  sY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
  endY = e.changedTouches[0].clientY;

  if (endY - sY > 100 && !notifPanel.classList.contains('active')) {
    // desliza hacia abajo → abre panel
    notifPanel.classList.add('active');
  } else if (sY - endY > 100 && notifPanel.classList.contains('active')) {
    // desliza hacia arriba → cierra panel
    notifPanel.classList.remove('active');
  }
});

/* menu opciones */

const option = document.querySelector('.options')
const icon = option.querySelector('i');

option.addEventListener('click', ()=>{

    if(icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun', 'fa-moon')
    } else {
        icon.classList.replace('fa-moon' , 'fa-sun')
    }

    icon.classList.add('animate');
    option.classList.toggle('animate');

    icon.addEventListener('animationend', () => {
        icon.classList.remove('animate');
    }, { once: true });

})