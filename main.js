let emptyA = $('#empty') ;
let aScroll = $('#about').offset().top;
let hScroll = $('#home').offset().top;

// var typed = new Typed('.element', {
//     strings: ["Frontend Developer","Specialized In React.js","UI/UX Designer"],
//     typeSpeed: 40,
//     backSpeed: 20,
//     startDelay: 20,
//     showCursor: false,
//     loop: true,
//     loopCount: Infinity,
// });

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id], div[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
function openMap() {
    // Replace with your Google Maps link or coordinates
    window.open('https://maps.google.com/?q=Your+City,Your+Country', '_blank');
}

// Smooth scroll for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy email to clipboard on long press (mobile)
document.querySelectorAll('.contact-link[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Copy email to clipboard
        const email = this.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Optional: show copied message
            console.log('Email copied to clipboard:', email);
        });
    });
});

const typingTexts = [
    'a Frontend Developer',
    'specialized in react.js',
    'a UI/UX Designer'
];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById('typingText');

function typeWriter() {
    const currentText = typingTexts[typingIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % typingTexts.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Smooth scrolling for CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator click
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
    setTimeout(animateCounters, 1500);
});

// Animate timeline items on scroll
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach(item => observer.observe(item));
});

// Animate stats counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + (current % 1 > 0.5 ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(counter);
    });
}

animateCounters();

$('#btnUp').click(function () {
    $('html,body').animate({scrollTop:hScroll},1000)
})

$(document).ready(function () {
    $('#loading .sk-chase').fadeOut(750,function () {
        $('html,body').animate({scrollTop:hScroll},0)
        $('#loading').fadeOut(1000,function () {
            $('body').css('overflow-y','auto');
            $('#loading').remove();
            
        })
    })
})

$("a[href^='#']").click(function (e) {
    $(e.target).parent().siblings().children().css('border-bottom','none');
    let linkHref = $(e.target).attr('href');
    let section = $(linkHref).offset().top;
    $('html,body').animate({scrollTop:section},1000)
})



$(window).scroll(function (){
    let mainNav = $('#mainNav');
    let Wscroll = $(window).scrollTop();
    if (Wscroll > aScroll  -50) {

        mainNav.css('backgroundColor','rgba(0,0,0,0.8)');
        mainNav.css('padding','20px');
        $('#btnUp').fadeIn(500)
    }
    else {
        mainNav.css('backgroundColor','transparent');
        mainNav.css('padding','10px 5px');
        $('#btnUp').fadeOut(500);
    }
})

new WOW().init();


