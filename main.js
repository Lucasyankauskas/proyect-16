const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');





//                             MENU 

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
};


if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
};


const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
};

navLink.forEach(n => n.addEventListener('click', linkAction));



function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrolly >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);



//                          SWIPER DISCOVER 


let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSkides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});


//                         VIDEO 


const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause () {
    if(videoFile.paused){
        videoFile.play()

        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo () {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', finalVideo);



//                                SHOW SCROOL UP                               

function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');
    
    if (this.scrollY >= 200){
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);



const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageXOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50,
        SectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + SectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + SectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);



const sr = ScrollReveal ({distance:'60px',duration:2800,});

sr.reveal(`.home_data, .home_social-link, .home_info, .discover_container, .experience_data, .experience_overlay, .place_card, .sponsor_content, .footer_data, .footer_right`,{
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about_data, .video_description, .subscribe_description`,{
    origin: 'left',
});

sr.reveal(`.about_img-overlay, .video_content, .subscribe_form`,{
    origin: 'right',
    interval: 100,
});





//                              DARK LIGHT THEME                               

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' ;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line' ;

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


