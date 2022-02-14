const openbtn = document.querySelector("#openbtn")
const closebtn = document.querySelector("#closebtn")
const navbar = document.querySelector("#navbar")
const navlink= document.querySelectorAll(".nav-link")
const N = navbar.getElementsByTagName('li').length;
let mql = window.matchMedia('(max-width: 500px)');
const hidenav = ()=>{
    navbar.classList.add('hide');
    openbtn.classList.remove('hide');
}
closebtn.addEventListener('click',hidenav)
openbtn.addEventListener('click',()=>{
    navbar.classList.remove('hide');
})
for(let i=0;i<=N-1;++i){
    navlink[i].addEventListener('click',hidenav)
}
mql.addEventListener("change",hidenav)


// connect with dev
const cont = document.querySelector('.cont')
const ball = document.querySelector('.ball')
ball.addEventListener('click',()=>{
    cont.classList.add('anim');
    setTimeout(()=>{
        cont.classList.remove('anim');
    },5000);
})

const banner = document.querySelector("#getstarted")
const bannerbtn = document.querySelector("#banner-btn")
bannerbtn.addEventListener('click',()=>{
    banner.classList.add('hide')
})