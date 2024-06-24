const menu = document.querySelectorAll(".menu-link");
console.log(menu);
if(menu){
    for(let i = 0;i<menu.length;i++){
        menu[i].addEventListener('click',menuLinkHandler);
    }
}
function menuLinkHandler(e){
    e.preventDefault();
    const menulink = e.target;
    if(menulink.dataset.target && document.querySelector(menulink.dataset.target)){
        const scrollblock = document.querySelector(menulink.dataset.target);
        const header = document.querySelector("header");
        const srcollBlockTop = scrollblock.getBoundingClientRect().top + 
        window.pageYOffset - header.getBoundingClientRect().height;
console.log(scrollblock.getBoundingClientRect());
console.log(header.getBoundingClientRect());
console.log(srcollBlockTop);
        window.scrollTo({
            top: srcollBlockTop,
            behavior: "smooth"
        })
        burgermenu.classList.remove("_open");
        nav.classList.remove("_open");
        document.body.classList.remove("_lock");
    }
}

const burgermenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".menu");


if(burgermenu){
    burgermenu.addEventListener('click',function(e){
        burgermenu.classList.toggle("_open");
        nav.classList.toggle("_open");
        document.body.classList.toggle("_lock");
    });
}

const slider = document.querySelector(".slider");
const step = slider.firstElementChild.getBoundingClientRect().width;
const maxRight = (slider.children.length - 3)*step;
console.log(slider.children.length)
const minLeft = 0;
if(slider){
    const arrowleft = document.querySelector(".arrow-left");
    const arrowright = document.querySelector(".arrow-right");
    let currentright = 0;
    arrowleft.addEventListener('click',e=>{
        
        if(currentright > minLeft){
            currentright -= step;
        }
        else{
            currentright = maxRight
        }
        slider.style.right = `${currentright}px`
    });
    arrowright.addEventListener('click',e=>{
        if(currentright < maxRight){
            currentright += step;
        }
        else{
            currentright = minLeft
        }
        slider.style.right = `${currentright}px`
    });
}
