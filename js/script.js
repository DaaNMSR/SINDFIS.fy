const headerMenu = document.getElementById('header');
const headerMenuBtn = document.getElementById('burger');

headerMenuBtn.addEventListener('click', () => {
    headerMenu.classList.toggle('open')
})

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains('active')) {
            tabsBtn.forEach((item) => {
                item.classList.remove('active')
             });
     
             tabsItems.forEach((item) => {
                 item.classList.remove('active')
              });
     
             currentBtn.classList.add('active');
             currentTab.classList.add('active');
        }
    })
});

const firstSlider = document.getElementById('first-slider');
const secondSlider = document.getElementById('second-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const reviewIndex = document.getElementById('review-index');

prevBtn.addEventListener('click', () => {
    let indexFirst = '1/2';

    reviewIndex.innerHTML = indexFirst;

    nextBtn.classList.remove('btn-opacity');
    prevBtn.classList.add('btn-opacity');

    firstSlider.style.display = 'flex';
    secondSlider.style.display = 'none';
})
   
nextBtn.addEventListener('click', () => {
    let indexSecond = '2/2';

    reviewIndex.innerHTML = indexSecond;

    nextBtn.classList.add('btn-opacity');
    prevBtn.classList.remove('btn-opacity');

    firstSlider.style.display = 'none';
    secondSlider.style.display = 'flex';
})

const openPopUpBtns = document.querySelectorAll('.open__popup');
const closePopUp = document.getElementById('close__popup');
const popUp = document.getElementById('form-modal');

openPopUpBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        popUp.classList.add('open-modal')
    })
    
    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('open-modal')
    })   
})

const formContent = document.getElementById('form__content');

document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ 
        popUp.classList.remove('open-modal')
	}
});

popUp.addEventListener('click', (event) => {
    const target = event.target;
    if (target === popUp) {
        popUp.classList.remove('open-modal')
    }
})


const cards = document.querySelectorAll('.first-screen__inner-wrapper-card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        let currentCard = card;
        if(!currentCard.classList.contains('first-screen__inner-wrapper-card-active')) {
                cards.forEach((card) => {
                    card.classList.remove('first-screen__inner-wrapper-card-active')
                })
        }
        currentCard.classList.add('first-screen__inner-wrapper-card-active')
    });
   
})
    





