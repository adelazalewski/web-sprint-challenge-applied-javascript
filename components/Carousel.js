/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselMaker() {
  let imageIndex = 1; //what image we're currently on\
  let translateX = 0; //how far left or right we've scrolled; we initialize it at 0 
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const buttonLeft = document.createElement('div');
  buttonLeft.classList.add('left-button');
  buttonLeft.textContent = " < ";
  buttonLeft.style.zIndex = "1";
  buttonLeft.id = 'previous';

  buttonLeft.addEventListener('click', (event) => {
    event.target.id === 'previous';
    if(imageIndex !== 1){
      imageIndex--;
      translateX += 100;
    }else if(imageIndex !== images){
      imageIndex++;
      translateX -=100; //this will slide the image conatiner to the left make it look like it's going forward;
    }
  });

  const image1 = document.createElement('img');
  image1.src = "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  const image2 = document.createElement('img');
  image2.src = "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  const image3 = document.createElement('img');
  image3.src = "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  const image4 = document.createElement('img');
  image4.src = "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  let images = document.querySelectorAll('img');
  console.log(images);

  const buttonRight = document.createElement('div');
  buttonRight.classList.add('right-button');
  buttonRight.style.zIndex = "1"; //so the buttons can alwasy be on top of the image
  buttonRight.textContent = " > ";
  buttonRight.id = 'next';
  buttonRight.addEventListener('click', (event) => {
    event.target.id === 'previous';
    if(imageIndex !== 1){
      imageIndex--;
      translateX += 100;
    }else if(imageIndex !== images){
      imageIndex++;
      translateX -=100;
    }
  });

  carousel.appendChild(buttonLeft);
  carousel.appendChild(image1);
  carousel.appendChild(image2);
  carousel.appendChild(image3);
  carousel.appendChild(image4);
  carousel.appendChild(buttonRight);

  return carousel;
};
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselMaker());
