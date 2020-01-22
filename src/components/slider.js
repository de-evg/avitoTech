const showSlides = (slideIndex) => {
  const sliderElement = document.querySelector(`.slider`);
  const slides = sliderElement.querySelectorAll(`.slide`);

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = `none`;
  }

  slides[slideIndex - 1].style.display = `block`;
  return slideIndex;
};

const plusSlideIndex = (slideIndex) => {
  return showSlides(slideIndex += 1);
};

const minusSlideIndex = (slideIndex) => {
  return showSlides(slideIndex -= 1);
};

export {showSlides, plusSlideIndex, minusSlideIndex};
