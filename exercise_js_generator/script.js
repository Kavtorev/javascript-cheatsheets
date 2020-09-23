const header3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById('gradient')




//'input' event can detect if input value changes

function changeGradient(){
    body.style.background = 
    'linear-gradient(to right, ' 
    + color1.value + ', ' + color2.value + ')'

    header3.textContent = body.style.background + ';'
    
}

color1.addEventListener('input', changeGradient)


color2.addEventListener('input', changeGradient)