function openNav(){document.getElementById("mySidebar").style.width="60%",document.getElementById("mySidebar").style.display="block"}function closeNav(){document.getElementById("mySidebar").style.display="none"}function showImgInModal(e){document.getElementById("modal_img01").src=e.src,document.getElementById("modal_img").style.display="block"}function carousel(){var e,n=document.getElementsByClassName("mySlides")
for(e=0;e<n.length;e++)n[e].style.display="none"
carouselIndex++,carouselIndex>n.length&&(carouselIndex=1),n[carouselIndex-1].style.display="block",setTimeout(carousel,5e3)}document.addEventListener("DOMContentLoaded",function(e){function n(){var e=document.querySelectorAll(".to-animate"),n=t(0,e.length)
e.forEach(function(e){e.classList.remove("w3-spin")}),e[n].classList.add("w3-spin")}function t(e,n){return Math.floor(Math.random()*(n-e))+e}setInterval(n,3e3)})
var carouselIndex=0
carousel()
