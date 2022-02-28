
let bannerTotalSlides = document.querySelectorAll('.banner .slide-item').length;
let bannerPointer = document.querySelectorAll('.banner .pointer');

banner = document.querySelector('.banner .slide').style.width = `calc(100vw * ${bannerTotalSlides})`;

let teamTotalSlides = document.querySelectorAll('.team .slide-item').length;
let teamPointer = document.querySelectorAll('.teamP.pointer');

document.querySelector('.team .slide').style.width = `calc(100vw * ${teamTotalSlides})`;

let clientsTotalSlides = document.querySelectorAll('.clients .slide-item').length;
let clientsPointer = document.querySelectorAll('.clientsP.pointer');

document.querySelector('.clients .slide').style.width = `calc(100vw * ${clientsTotalSlides})`;

let premiumTotalSlides = document.querySelectorAll('.premium .slide-item').length;
let premiumPointer = document.querySelectorAll('.premiumP.pointer');

document.querySelector('.premium .slide').style.width = `calc(100vw * ${premiumTotalSlides})`;

let currentBannerSlide = 0;
let currentTeamSlide = 0;
let currentClientsSlide = 0;
let currentPremiumSlide = 0;

const setBannerSlide = (n) => {
    currentBannerSlide = n;
    document.querySelector('.pointer.active').classList.remove('active');
    
    bannerPointer[currentBannerSlide].classList.add('active');

    updateBanner();
}
const goNextBanner = () => {
    currentBannerSlide++;
    if( currentBannerSlide > (bannerTotalSlides - 1) ) {
        currentBannerSlide = 0;
    }
    updateBanner();
}
const updateBanner = () => {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentBannerSlide * slideItemWidth);
    document.querySelector('.banner .slide').style.marginLeft = `-${newMargin}px`;
}



const setTeamSlide = (n) => {
    currentTeamSlide = n;
    document.querySelector('.teamP.pointer.active').classList.remove('active');

    teamPointer[currentTeamSlide].classList.add('active');

    updateTeam();
}
const goNextTeam = () => {
    currentTeamSlide++;
    if( currentTeamSlide > (teamTotalSlides - 1) ) {
        currentTeamSlide = 0;
    }
    updateTeam();
}
const updateTeam = () => {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentTeamSlide * slideItemWidth);
    document.querySelector('.team .slide').style.marginLeft = `-${newMargin}px`;
}


const setClientsSlide = (n) => {
    currentClientsSlide = n;
    document.querySelector('.clientsP.pointer.active').classList.remove('active');

    clientsPointer[currentClientsSlide].classList.add('active');

    updateClients();
}
const goNextClients = () => {
    currentClientsSlide++;
    if( currentClientsSlide > (clientsTotalSlides - 1) ) {
        currentClientsSlide = 0;
    }
    updateClients();
}
const updateClients = () => {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentClientsSlide * slideItemWidth);
    document.querySelector('.clients .slide').style.marginLeft = `-${newMargin}px`;
    console.log(slideItemWidth)
}


const setPremiumSlide = (n) => {
    currentPremiumSlide = n;
    document.querySelector('.premiumP.pointer.active').classList.remove('active');

    premiumPointer[currentPremiumSlide].classList.add('active');

    updatePremium();
}
const goNextPremium = () => {
    currentPremiumSlide++;
    if( currentPremiumSlide > (premiumTotalSlides - 1) ) {
        currentPremiumSlide = 0;
    }
    updatePremium();
}
const updatePremium = () => {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let newMargin = (currentPremiumSlide * slideItemWidth);
    document.querySelector('.premium .slide').style.marginLeft = `-${newMargin}px`;
    console.log(slideItemWidth)
}




document.querySelector('.menu-mobile').addEventListener('click', ()=> {
    openMenu = document.querySelector('.menu nav');

    openMenu.style.display == 'none'
    ? openMenu.style.display = 'block'
    : openMenu.style.display = 'none';
});



const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// setInterval(goNextTeam, 3000);