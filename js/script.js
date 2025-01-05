/////////////////////// burger-menu START //////////////////////////

const headerContent = document.getElementById("header__content");
const burgerButton = document.getElementById("burger");
const body = document.body;

const openAndCloseBurgerMenu = () => {
  headerContent.classList.toggle("open");
  burgerButton.classList.toggle("open");
  body.classList.toggle("scroll-off");
};

burgerButton.addEventListener("click", openAndCloseBurgerMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && headerContent.classList.contains("open")) {
    openAndCloseBurgerMenu();
  }
});

/////////////////////// burger-menu END ////////////////////////////

/////////////////////// first-screen cards START //////////////////

const cards = document.querySelectorAll(".first-screen__card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("active")) {
      cards.forEach((card) => {
        card.classList.remove("active");
      });
    }

    card.classList.add("active");
  });
});

/////////////////////// first-screen cards END ////////////////////

//////////////////////////// tabs START /////////////////////////////

const tabs = document.querySelectorAll(".tabs__item");
const tabsButtons = document.querySelectorAll(".tabs__nav-btn");
const tabsImages = document.querySelectorAll(".tabs__image");

tabsButtons.forEach((currentButton) => {
  const tabId = currentButton.getAttribute("data-tab");
  const currentTab = document.querySelector(tabId);

  const tabImgId = currentButton.getAttribute("data-img");
  const currentImg = document.querySelector(tabImgId);

  const changeTabContent = () => {
    if (!currentButton.classList.contains("active")) {
      tabsButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      tabsImages.forEach((image) => {
        image.classList.remove("active");
      });

      currentButton.classList.add("active");
      currentTab.classList.add("active");
      currentImg.classList.add("active");
    }
  };

  currentButton.addEventListener("click", changeTabContent);
});
//////////////////////////// tabs END //////////////////////////////

//////////////////////////// slider START //////////////////////////

const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".slider__button");
const items = document.querySelectorAll(".slider__item");
const buttonSliderPrev = document.getElementById("slider__button-prev");
const buttonSliderNext = document.getElementById("slider__button-next");
const lastSlide = items.length;
let sliderItemWidth = document.querySelector(".slider__item").offsetWidth;
let currentSlide = 1;
let slidesToShow;

const checkSlider = () => {
  sliderItemWidth = document.querySelector(".slider__item").offsetWidth;
  slider.clientWidth >= 1276 ? (slidesToShow = 3) : (slidesToShow = 1);
  checkButtons();
};

const checkButtons = () => {
  currentSlide === 1
    ? (buttonSliderPrev.disabled = true)
    : (buttonSliderPrev.disabled = false);

  currentSlide === lastSlide / slidesToShow
    ? (buttonSliderNext.disabled = true)
    : (buttonSliderNext.disabled = false);
};

buttons.forEach((button) => {
  const scrollingSlide = () => {
    slider.scrollLeft +=
      button.id === "slider__button-prev"
        ? -sliderItemWidth * slidesToShow
        : sliderItemWidth * slidesToShow;
  };

  button.addEventListener("click", scrollingSlide);
});

const changeCounterPrev = () => {
  if (currentSlide > 1) {
    currentSlide -= 1;
    checkButtons();
  }
};

const changeCounterNext = () => {
  if (currentSlide < lastSlide / slidesToShow) {
    currentSlide += 1;
    checkButtons();
  }
};

buttonSliderPrev.addEventListener("click", changeCounterPrev);
buttonSliderNext.addEventListener("click", changeCounterNext);

window.addEventListener("resize", checkSlider);

checkSlider();
checkButtons();
/////////////////////// slider END //////////////////////////

/////////////////////// popup START /////////////////////////

const popUp = document.getElementById("form-modal");
const openPopUpButtons = document.querySelectorAll(".open__popup");
const closePopUpButton = document.getElementById("close__popup");

openPopUpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popUp.classList.add("open-modal");
    body.classList.add("scroll-off-modal");
  });
});

closePopUpButton.addEventListener("click", () => {
  popUp.classList.remove("open-modal");
  body.classList.remove("scroll-off-modal");
});

const closePopUp = (event) => {
  if (event.target === popUp || event.keyCode === 27) {
    popUp.classList.remove("open-modal");
    body.classList.remove("scroll-off-modal");
  }
};

popUp.addEventListener("click", closePopUp);
document.addEventListener("keydown", closePopUp);

/////////////////////// popup END /////////////////////////
