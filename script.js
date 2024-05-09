// menu
let menuArea = document.querySelector('.btn-menu-icon');
let menuContent = document.querySelector('.navbar');
menuArea.addEventListener('click',()=>{

    menuContent.classList.toggle('desactive')
    if(menuContent.classList.contains('desactive')){
        document.querySelector('.line-menu-fs').style.marginRight = '0'
        document.querySelector('.line-menu-tr').style.marginLeft = '0'
    }
    else{
        document.querySelector('.line-menu-fs').style.marginRight = '15px'
        document.querySelector('.line-menu-tr').style.marginLeft = '15px'
    }
})

const cards = document.querySelectorAll('.cards-item')

cards.forEach((item,index)=>{
    cards[0].style.background='#b7687b'
    cards[0].querySelector('i').style.color='white'
    cards[0].querySelector('h5').style.color='white'
    cards[0].querySelector('hr').style.background='white'
    cards[0].querySelectorAll('p').forEach((item)=>{
        item.style.color='white'
    })
    item.style.transition= '.3s ease-in-out'

  
    
    function mouseover(){
        
       if(index === 1 || index ===2){
        cards[0].style.background=''
        cards[0].querySelector('i').style.color=''
        cards[0].querySelector('h5').style.color=''
        cards[0].querySelector('hr').style.background=''
        cards[0].querySelectorAll('p').forEach((item)=>{
            item.style.color=''
        })
    
       }
      
    }
    function mouseout(){
      
        cards[0].style.background='#b7687b'
        cards[0].querySelector('i').style.color='white'
        cards[0].querySelector('h5').style.color='white'
        cards[0].querySelector('hr').style.background='white'
        cards[0].querySelectorAll('p').forEach((item)=>{
            item.style.color='white'
        })
           

    }
    
    item.addEventListener('mouseenter',mouseover)
    item.addEventListener('mouseleave',mouseout)

})
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const holidays = "20 july 2024";

function countdown(){
    const holidaysDate = new Date(holidays);
    const currentDate = new Date();
    const totalSeconds = (holidaysDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds)% 60
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
   

} 
function formatTime(time){
    return time < 10 ? `0${time}`: time
}

countdown()
setInterval(countdown,1000)
