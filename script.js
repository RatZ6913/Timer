let timer = document.querySelector('#timer');
let textTimer = document.querySelector('#saveTimer');
let stop = document.querySelector('button');
let reset = document.querySelector('button:nth-child(2)');
let start = document.querySelector('button:nth-child(3)');
let div = document.querySelector('.btn');
let infos = document.createElement('p');
let effect = document.querySelector('#circle');
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let count = 0;

timer.innerHTML = `Appuyez sur Start !`;

// Mettre en marche le Chrono
start.addEventListener('click', () => {
  timer.style.border = "1px solid black";
  infos.textContent = "En cours !";
  infos.style.color = "green";
  div.before(infos);
  effect.classList.remove('redEffect', 'orangeEffect');
  effect.classList.add('greenEffect');
  start.style.display = "none";

  interval = setInterval(() => {
    timer.innerHTML = `
    <span style="color:brown"> ${hours} </span> : 
    <span style="color:red"> ${minutes} </span> : 
    <span style="color:orange"> ${seconds} </span> : 
    <span style="color:green"> ${milliseconds++} </span>`;

    if (milliseconds == 59) {
      milliseconds = 0;
      seconds += 1;

      if (seconds == 59) {
        seconds = 0;
        minutes += 1;

        if (minutes == 59) {
          minutes = 0;
          hours += 1;
        }
      }
    }
  }, 10);
  
})

// Reset le Chrono
reset.addEventListener('click', () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  effect.classList.remove('redEffect', 'greenEffect');
  effect.classList.add('orangeEffect');
  start.style.display = "";

  timer.innerHTML = `Oups ! Recommencer ?`;
  timer.style.border = "none";
  infos.textContent = "";

  clearInterval(interval);
})

// Mettre en pause 
stop.addEventListener('click', () => {
  let save = document.createElement('p');
  start.style.display = "";
  
  textTimer.append(save);
  save.classList.add('save');

  infos.style.display = "";
  infos.style.color = "red";
  effect.classList.remove('greenEffect', 'orangeEffect');
  effect.classList.add('redEffect');

  infos.textContent = "En pause !";
  timer.innerHTML = `
  <span style="color:brown"> ${hours} </span> : 
  <span style="color:red"> ${minutes} </span> : 
  <span style="color:orange"> ${seconds} </span> : 
  <span style="color:green"> ${milliseconds} </span>`;

  save.innerHTML = `Temps enregistré(s) ${count++}: ${timer.innerHTML} `;

  clearInterval(interval);
})









