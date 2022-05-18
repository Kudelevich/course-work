let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();//Пересоздается интервал если производится нажатие 
});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();//Пересоздается интервал если производится нажатие 
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("myslide");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";    
  }
 var timer = 0;
 makeTimer(); //Создается интервал 
 function makeTimer(){
    clearInterval(timer) //Очищается интервал, что позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },4000);
  }

  //******************************************************************************************************** */





