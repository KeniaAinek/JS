const d = document;

export function reloj(clock, btnPlay, btnStop) {
    let start, clockH;
    const clockstartBtn = d.querySelector(btnPlay);
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      start = setInterval(() => {
        clockH = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockH}</h3>`;
      }, 1000);
      clockstartBtn.setAttribute("disabled", true);
    }

    if (e.target.matches(btnStop)) {
      clearInterval(start);
      d.querySelector(clock).innerHTML = null;
      clockstartBtn.removeAttribute("disabled");
    }
  });
}

export function alarma(sound, btnPlay, btnStop) {
  let alert;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alert = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alert);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
  }
});
}
