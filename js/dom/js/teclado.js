const d = document;
let x = 0,
  y = 0;

export function shortcuts(e) {
  /* console.log(e);
    console.log(e.type);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.key); */

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado un a alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado un a confirmacion con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un promp con el teclado");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
