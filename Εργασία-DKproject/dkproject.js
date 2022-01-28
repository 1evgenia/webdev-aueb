function toggleButtonHandler() {

    let toggleMenu = document.querySelector('.toggle-menu');
    let slider =document.querySelector('.slider');
    let main=document.querySelector('.contact');
    let footer=document.querySelector('.footer');
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display')



    if (toggleMenuDisplayStatus== "none") {
        toggleMenu.style.display = "block";
        slider.style.display="none";
        contact.style.display="none";
        footer.style.display="none";

    } else {
        toggleMenu.style.display = "none";
        slider.style.display="block";
        contact.style.display="block";
        footer.style.display="flex";
    }

}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}