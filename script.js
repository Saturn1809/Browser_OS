
const start = document.querySelector('.start');
const menu = document.querySelector('.menu');

start.addEventListener('click' , () => {
     menu.classList.toggle('hidden');
    

})

const lock_icon = document.querySelector('.lock-icon')
lock_icon.addEventListener('click',()=>{
    lock_bar.classList.toggle('hidden');
    
})

const lock_bar = document.querySelector('.lock-bar')


const arrow = document.querySelector('.arrow');
arrow.addEventListener('click' , () => {
    console.log('Clicked byme');
})


const language = document.querySelector('.lang');
language.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})

const utils = document.querySelector('.utils');
utils.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})

const dates = document.querySelector('.date');
dates.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})
const search = document.querySelector('.search');
search.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})

