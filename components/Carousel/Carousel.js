/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caro = Carousel();
document.querySelector('.carousel-container').appendChild(caro);

function Carousel() {
  const carousel = createElement('div');
  const leftBtn = createElement('div');
  const img0 = createElement('img');
  const img1 = createElement('img');
  const img2 = createElement('img');
  const img3 = createElement('img');
  const rightBtn = createElement('div');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  img0.classList.add('show');

  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  img0.src = "./assets/carousel/mountains.jpeg"
  img1.src = "./assets/carousel/computer.jpeg"
  img2.src = "./assets/carousel/trees.jpeg"
  img3.src = "./assets/carousel/turntable.jpeg"

  const images = [img0, img1, img2, img3];
  let i = 0;
  //console.log(images);

  leftBtn.addEventListener('click', moveLeft);
  rightBtn.addEventListener('click', moveRight);

  appendElements(carousel, [leftBtn, img0, img1, img2, img3, rightBtn]);

  function moveLeft() {
    images[i].classList.toggle('show');
    i--;
    if (i < 0) {
      i = 3;
    }
    images[i].classList.toggle('show');
  }

  function moveRight() {
    images[i].classList.toggle('show');
    i++;
    if (i > 3) {
      i = 0;
    }
    images[i].classList.toggle('show');
  }

  return carousel;
}


