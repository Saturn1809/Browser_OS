
const start = document.querySelector('.start');
const menu = document.querySelector('.menu');

start.addEventListener('click' , () => {
     menu.classList.toggle('hidden');
});

const lock_icon = document.querySelector('.lock-icon');
const lock_bar = document.querySelector('.lock-bar');

lock_icon.addEventListener('click',()=>{
    lock_bar.classList.toggle('hidden');
    
});

document.addEventListener('click',(e)=>{
    if (!menu.contains(e.target) && !start.contains(e.target)) {
    menu.classList.add('hidden');
  }

  // Close lock bar if clicked outside
  if (!lock_bar.contains(e.target) && !lock_icon.contains(e.target)) {
    lock_bar.classList.add('hidden');
  }

});




const arrow = document.querySelector('.arrow');
arrow.addEventListener('click' , () => {
    console.log('Clicked byme');
})


const language = document.querySelector('.lang');
language.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})

const utils = document.querySelector('.utils');
const search_bar = document.querySelector('.settings-bar');
utils.addEventListener('click' , (e) => {
    //     e.stopPropagation();
    search_bar.classList.toggle('hidden')
    
})
document.addEventListener('click',(e) =>{
      if (!search_bar.contains(e.target) && !utils.contains(e.target)) {
    search_bar.classList.add('hidden');
  }
});


const dates = document.querySelector('.date');
dates.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})
const search = document.querySelector('.search');
search.addEventListener('click' , () => {
    console.log('Clicked byme');
    
})

