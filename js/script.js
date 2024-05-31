function showSideBar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}

function hideSideBar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

let swiperCards = new Swiper('.card-content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    600:{
      slidesPerView: 2,
    },

    968:{
      slidesPerView: 3,
    },
  }
});

const myslide = document.querySelectorAll('.myslider');
 dot = document.querySelectorAll('.dot');

 let counter = 1;
 slideFun(counter);

 let timer = setInterval(autoslide, 8000);

 function autoslide(){
  counter += 1;
  slideFun(counter);
 }

 function plusSlides (n){
  counter += n;
  slideFun(counter);
  resetTimer();
 }

 function currentSlide (n){
  counter = n;
  slideFun(counter);
  resetTimer();
 }

 function resetTimer (){
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
 }

 function slideFun(n){
  let i;
  for (i = 0; i < myslide.length; i++){
    myslide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++){
    dot[i].classList.remove('active');
  }

  if (n > myslide.length){
    counter = 1;
  }

  if (n < 1){
    counter = myslide.length;
  }
  
  myslide[counter -1].style.display = "block";
  dot[counter -1].classList.add('active');

 }

 const accordion = document.getElementsByClassName('content-bx');

 if (accordion.length > 0) {
   accordion[0].classList.add('active');
 }
 
 for (let i = 0; i < accordion.length; i++) {
   accordion[i].addEventListener('click', function() {
     this.classList.toggle('active');
 
     if (this !== accordion[0]) { 
       for (let j = 0; j < accordion.length; j++) {
         if (j !== i) {
           accordion[j].classList.remove('active');
         }
       }
     }
   });
 }
 