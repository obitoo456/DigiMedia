//Check Local Storage
let settingsSpans=document.querySelectorAll(".settings .theme-color span");

if(window.localStorage.getItem("theme-version")){

    let version=window.localStorage.getItem("theme-version");

    if(version=="v3"){
        setTheme("#4fa6E7","v3")
        localStorage.setItem("theme-version","v3")
}else if(version=="v2"){
    setTheme("#fE664E","v2")
    localStorage.setItem("theme-version","v2")


}else{
    setTheme("#fa65b1","v1")
    localStorage.setItem("theme-version","v1")

}
settingsSpans.forEach(span=>{
    span.classList.remove("active");
    if(span.dataset.theme == version){
        span.classList.add("active")
    }
})
}
//settings Part
// Setting Menu
let settingsBtn=document.querySelector(".header .container .settings-btn i");
let settingsEle=document.querySelector(".settings");
let closeBtn=document.querySelector(".settings .close-btn");
settingsBtn.onclick=function(){
settingsEle.classList.add("open")
}
closeBtn.onclick=function(){
    settingsEle.classList.remove("open")

}
// End Menue
// Start Theme Change

settingsSpans.forEach(span=>{
    span.addEventListener('click',function(){
        settingsSpans.forEach(span=>span.classList.remove('active'))
        span.classList.add("active")
        if(span.dataset.theme=="v3"){
            setTheme("#4fa6E7","v3")
            localStorage.setItem("theme-version","v3")
    }else if(span.dataset.theme=="v2"){
        setTheme("#fE664E","v2")
        localStorage.setItem("theme-version","v2")


    }else{
        setTheme("#fa65b1","v1")
        localStorage.setItem("theme-version","v1")

    }
    })
})


// Start Header
//  Header Part
let navBtn=document.querySelector(".header .container i");
let navLinks=document.querySelector(".header .container .links")
stopProp(navLinks)
stopProp(navBtn)
navBtn.onclick=function(e){
    navLinks.classList.toggle("open")
}

document.body.onclick=function(e){

    if(e.target !== navBtn && e.target!== navLinks){
        navLinks.classList.remove("open")
    }
}


let linksLisA=document.querySelectorAll(".header .container .links ul li a");
linksLisA.forEach(link => link.addEventListener("click",function(e){
    linksLisA.forEach(l=>l.classList.remove('active'));
    link.classList.add("active")
    e.preventDefault();
    document.querySelector(link.dataset.section).scrollIntoView({
        behavior:'smooth'
    })
}))

//Functions
function stopProp(ele){
    ele.onclick=function(e){
        e.stopPropagation()
    }
}

function setTheme(color,imgsVersion){
let logoImg=document.querySelector(".header .container .logo img");
let landingImg=document.querySelector(".landing .container .image-part img");
let aboutusImg=document.querySelector(".about-us .container .image img");
let qouteSec=document.querySelector(".qoute");
let contactB=document.querySelector(".contact-us .container .content > img.b-r")
let contactT=document.querySelector(".contact-us .container .content > img.t-r")
let contactAbove=document.querySelector(".contact-us .container .content > img")
let footerBg=document.querySelector(".footer");
document.documentElement.style.setProperty('--main-color',color);
    logoImg.src=`imgs/logo-${imgsVersion}.png`
    landingImg.src=`imgs/slider-dec-${imgsVersion}.png`
    aboutusImg.src=`imgs/about-dec-${imgsVersion}.png`
    qouteSec.style.backgroundImage=`url("imgs/quote-bg-${imgsVersion}.jpg")`
    contactB.src=`imgs/contact-bottom-right-${imgsVersion}.png`
    contactT.src=`imgs/contact-top-right-${imgsVersion}.png`
    contactAbove.src=`imgs/contact-dec-${imgsVersion}.png`
    footerBg.style.backgroundImage=`url("imgs/footer-bg-${imgsVersion}.jpg")`


}

//About us Sec
let progressEle=document.querySelectorAll(".about-us .container .content .state .progress span");
let aboutusSection=document.querySelector(".about-us")
let progressPercentage = document.querySelectorAll(".about-us .container .content .state .progress .number")
let started=false
window.onscroll=function(){
    let headerEle=document.querySelector(".header");
    if(window.scrollY > headerEle.offsetHeight){
        headerEle.classList.add("fixed")
    }else{
        headerEle.classList.remove("fixed")

    }
    if(window.scrollY > aboutusSection.offsetTop){
        progressEle.forEach(span=>{
            span.style.width=`${span.parentElement.dataset.prog}%`;
       })
    if(!started){
       progressPercentage.forEach(per=>{
        per.innerHTML=0;
       let timer =setInterval(() => {
            per.innerHTML++
            if(per.innerHTML==per.parentElement.dataset.prog){
                clearInterval(timer)
                per.innerHTML+="%"
            }
        }, 300/per.parentElement.dataset.prog);

       })

    }
    started=true
    }
}

// Services Sec
let servicesTitles=document.querySelectorAll(".services .content .titles .box");
let servicesBoxes=document.querySelectorAll(".services .content .box-content .box");

servicesTitles.forEach(title=>{
    title.onclick=function(e){
        servicesTitles.forEach(t=>t.classList.remove("active"));
        title.classList.add("active");
        servicesBoxes.forEach(service=>{
            service.classList.remove('active')
            if(service.dataset.serv == title.dataset.serv){
                service.classList.add('active')
            }

        })
    }
})

// Portfolio Sec
let rightBtn=document.querySelector(".right-icon")
let lefttBtn=document.querySelector(".left-icon")
let content=document.querySelector(".portfolio .content")
let boxes=content.getElementsByClassName("box")
rightBtn.onclick=function next(){
    boxes[0].classList.add("next-hidden")
    setTimeout(() => {
        boxes[0].classList.remove("next-hidden")
        content.append(boxes[0])
    }, 300);
}
lefttBtn.onclick=function perv(){
    content.prepend(boxes[boxes.length -1])
}

let contentTimer =setInterval(() => {
    rightBtn.click()
}, 3000);

