
//Abri e fecha o menu ao clicar nos icons: Hamburger ou X. 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


// Quando clicar em um item do menu, esconder menu
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}


//Adcionar a sombra assim quando der um scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        // Scroll Maior que a altura do Header
        header.classList.add('scroll')
    } else {
        // Scroll Menos que a altura do Header
        header.classList.remove('scroll')
    }
})


// CONFIGURAÇÃO DA BIBLIOTECA SWIPER NO TESTIMONIALS
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    //Colocanco dois slides quando a tela for um pouco maior.
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapper: true,
        }
    }
})



// ScrollReveal: Mostrar elementos quendo der scroll na página

var scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: 700,
    reset: true
})

// Pegando so elementos da página que serão aplicados no SCROLLREVEAL 


scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text, #about,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials
     #contact .text, #contact ,links,
     footer .brand, footer .social
        `,
    { interval: 100 })


//BUTON BACK TO TOP 
const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})

