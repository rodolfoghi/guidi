// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", (event) => {
  function addClassAnime() {
    let letrasNome = document.querySelectorAll('.to-animate'),
      randomIndex = getRandomInt(0, letrasNome.length);

    letrasNome.forEach((elem) => elem.classList.remove('w3-spin'));
    letrasNome[randomIndex].classList.add('w3-spin');
  }


  // Retorna um  número inteiro entre min (incluso) e max (excluído)
  // Usando Math.round() vai lhe dar uma distribuição não uniforme!
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  setInterval(addClassAnime, 3000);
});
