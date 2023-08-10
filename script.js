const history = document.querySelector('#history');
const historys = document.querySelector('.text-history');
history.addEventListener('click', function(){
    historys.style.display = "block"
    visions.style.display = "none"
    missions.style.display = "none"
});

const vision = document.querySelector('#vision');
const visions = document.querySelector('.text-vision');
vision.addEventListener('click',function(){
    historys.style.display = "none"
    visions.style.display = "block"
    missions.style.display = "none"
});

const mission = document.querySelector('#mission');
const missions = document.querySelector('.text-mission');

mission.addEventListener('click', function(){
    historys.style.display = "none"
    visions.style.display = "none"
    missions.style.display = "block"
});