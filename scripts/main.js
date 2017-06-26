document.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById("clown-canvas"),
    WIDTH_CHAPEU = 105,
    HEIGHT_CHAPEU = WIDTH_CHAPEU * 1.01,
    X_CHAPEU = canvas.width / 2 - WIDTH_CHAPEU / 2,
    Y_CHAPEU = 0,
    BORDA_ABA = 40,
    X_ABA = X_CHAPEU - BORDA_ABA,
    Y_ABA = Y_CHAPEU + HEIGHT_CHAPEU,
    WIDTH_ABA = WIDTH_CHAPEU + BORDA_ABA * 2,
    HEIGHT_ABA = 20,
    RAIO_CABECA = 80,
    X_CABECA = X_CHAPEU + RAIO_CABECA / 1.6,
    Y_CABECA = Y_ABA + HEIGHT_ABA + RAIO_CABECA /1.2,
    RAIO_BOCA = RAIO_CABECA - 20,
    X_BOCA = X_CABECA,
    Y_BOCA = Y_CABECA,
    RAIO_OLHOS = 15,
    Y_OLHOS = Y_BOCA - 35,
    X_OLHOESQUERDO = X_BOCA - RAIO_BOCA / 2,
    X_OLHODIREITO = X_BOCA + RAIO_BOCA / 2,
    RAIO_NARIZ = RAIO_OLHOS * 1.5,
    X_NARIZ = X_BOCA,
    Y_NARIZ = Y_BOCA + 10;

  // Sanity check
  if (!canvas.getContext) throw 'sorry, but canvas.getContext is false!';

  let ctx = canvas.getContext('2d');

  ctx.canvas.width  = window.innerWidth;
  setCanvasHeight(ctx);
  draw(ctx);

  function setCanvasHeight(ctx) {
    let canvasHeight = window.innerHeight;
    if (canvasHeight >= 640) {
       canvasHeight /= 2;
    }
    ctx.canvas.height = canvasHeight;
  }

  function draw(ctx) {
    drawChapeu(ctx);
    drawCabeca(ctx);
    drawBoca(ctx);
    drawOlhos(ctx)
    drawNariz(ctx);
  }

  function drawChapeu(ctx) {
    ctx.beginPath();
    ctx.fillRect(X_CHAPEU, Y_CHAPEU, WIDTH_CHAPEU, HEIGHT_CHAPEU);
    ctx.fillRect(X_ABA, Y_ABA, WIDTH_ABA, HEIGHT_ABA);
    ctx.closePath();
  }
  function drawCabeca(ctx) {
    ctx.beginPath();
    ctx.arc(X_CABECA, Y_CABECA, RAIO_CABECA, 0, Math.PI * 2, true); // Cabeça
    ctx.stroke();
    ctx.closePath();
  }

  function drawBoca(ctx) {
    ctx.beginPath();
    ctx.moveTo(X_BOCA + RAIO_BOCA, Y_BOCA);
    ctx.arc(X_BOCA, Y_BOCA, RAIO_BOCA, 0, Math.PI, false);
    ctx.stroke();
    ctx.closePath();
  }

  function drawOlhos(ctx) {
    ctx.beginPath();
    ctx.moveTo(X_OLHOESQUERDO + RAIO_OLHOS, Y_OLHOS);
    ctx.arc(X_OLHOESQUERDO, Y_OLHOS, RAIO_OLHOS, 0, Math.PI * 2, true);

    ctx.moveTo(X_OLHODIREITO + RAIO_OLHOS, Y_OLHOS);
    ctx.arc(X_OLHODIREITO, Y_OLHOS, RAIO_OLHOS, 0, Math.PI * 2, true);

    ctx.stroke();
    ctx.closePath();
  }

  function drawNariz(ctx) {
    ctx.beginPath();
    ctx.arc(X_NARIZ, Y_NARIZ, RAIO_NARIZ, 0, Math.PI * 2, true);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  }
});
