/////////////////////// burger-menu START //////////////////////////

const headerContent = document.getElementById("header-content");
const burgerButton = document.getElementById("burger");
const body = document.getElementById("body");

const openAndCloseBurgerMenu = () => {
    headerContent.classList.toggle("open");
    burgerButton.classList.toggle("open");
    body.classList.toggle("scroll-off");
};

burgerButton.addEventListener("click", openAndCloseBurgerMenu);

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
const tabsImages = document.querySelectorAll(".about-content-img");

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
//////////////////////////// tabs END /////////////////////////////

//////////////////////////// slider START /////////////////////////

const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".slider__button");
const items = document.querySelectorAll(".slider__item");
const sliderItemWidth = document.querySelector(".slider__item").offsetWidth;
const buttonSliderPrev = document.getElementById("slider__button-prev");
const buttonSliderNext = document.getElementById("slider__button-next");
const lastSlide = items.length;
let currentSlide = 1;
let slidesToShow;

const checkSlides = () => {
    if (slider.clientWidth >= 1276) {
        slidesToShow = 3;
        slidesToScroll();
    }

    if (slider.clientWidth < 1276) {
        slidesToShow = 1;
        slidesToScroll();
    }
};

checkSlides();

window.addEventListener("resize", checkSlides);

function slidesToScroll() {
    buttons.forEach((button) => {
        const scrollingSlide = () => {
            slider.scrollLeft +=
                button.id === "slider__button-prev"
                    ? -sliderItemWidth * slidesToShow
                    : sliderItemWidth * slidesToShow;
        };

        button.addEventListener("click", scrollingSlide);
    });

    const checkButtons = () => {
        if (currentSlide === 1) {
            buttonSliderPrev.disabled = true;
        } else if (currentSlide > 1) {
            buttonSliderPrev.disabled = false;
        }

        if (currentSlide === lastSlide / slidesToShow) {
            buttonSliderNext.disabled = true;
        } else if (currentSlide < lastSlide / slidesToShow) {
            buttonSliderNext.disabled = false;
        }
    };

    const changeCounterPrev = () => {
        if (currentSlide > 1) {
            currentSlide -= 1;
        }

        checkButtons();
    };

    const changeCounterNext = () => {
        if (currentSlide < lastSlide / slidesToShow) {
            currentSlide += 1;
        }

        checkButtons();
    };

    buttonSliderPrev.addEventListener("click", changeCounterPrev);
    buttonSliderNext.addEventListener("click", changeCounterNext);
}

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

    closePopUpButton.addEventListener("click", () => {
        popUp.classList.remove("open-modal");
        body.classList.remove("scroll-off-modal");
    });
});

const closePopUpOutClick = (e) => {
    const target = e.target;

    if (target === popUp) {
        popUp.classList.remove("open-modal");
        body.classList.remove("scroll-off-modal");
    }
};

const closePopUpEsc = (e) => {
    if (e.keyCode === 27) {
        popUp.classList.remove("open-modal");
        body.classList.remove("scroll-off-modal");
    }
};

popUp.addEventListener("click", closePopUpOutClick);
document.addEventListener("keydown", closePopUpEsc);

/////////////////////// popup END /////////////////////////
