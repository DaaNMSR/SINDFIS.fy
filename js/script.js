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

const openPopUp = document.querySelectorAll('.open__popup');
const closePopUp = document.getElementById('close__popup');
const popUp = document.getElementById('form-modal');

openPopUp.forEach((btn) => {
    btn.addEventListener('click', () => {
        popUp.classList.add('open-modal')
    })
})


const openedPopUp = popUp.classList.contains('open-modal');
console.log(openedPopUp);

document.addEventListener('click', (e) => {
        const clickPopUp = e.composedPath().includes(popUp);
        if (clickPopUp) {
            popUp.classList.remove('open-modal')
        }
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('open-modal')
})




    






