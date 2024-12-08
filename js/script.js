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