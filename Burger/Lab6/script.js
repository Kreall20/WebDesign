const burgermenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".menunav");

if(burgermenu){
    burgermenu.addEventListener('click',function(e){
        burgermenu.classList.toggle("_open");
        nav.classList.toggle("_open");
        document.body.classList.toggle("_lock");
    });
}

const menu = document.querySelectorAll(".menu-link");

if(menu ){
    for(let i = 0;i<menu.length;i++){
        menu[i].addEventListener('click',menuLinkHandler);
    }
}
function menuLinkHandler(e){
        e.preventDefault();
        burgermenu.classList.remove("_open");
        nav.classList.remove("_open");
        document.body.classList.remove("_lock");
    }

const slider = document.querySelector(".slider");
const minLeft = 0;
if(slider){
    const arrowleft = document.querySelector(".arrow-left");
    const arrowright = document.querySelector(".arrow-right");
    let currentright = 0;
    let step = 0;
    let maxRight = 0;
    arrowleft.addEventListener('click',e=>{
        step = slider.firstElementChild.getBoundingClientRect().width;
        console.log(step)
        maxRight = (slider.children.length -1)*step;
        console.log(maxRight)
        if(currentright > minLeft){
            currentright -= step;
        }
        else{
            currentright = maxRight
        }
        slider.style.right = `${currentright}px`
    });
    arrowright.addEventListener('click',e=>{
        step = slider.firstElementChild.getBoundingClientRect().width;
        console.log(step)
        maxRight = (slider.children.length -1)*step;
        console.log(maxRight)
        if(currentright < maxRight){
            currentright += step;
        }
        else{
            currentright = minLeft
        }
        slider.style.right = `${currentright}px`;
    });
}

