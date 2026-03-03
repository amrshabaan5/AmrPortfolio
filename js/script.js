// Fade-in Animations
const faders = document.querySelectorAll('section');
const options = { threshold:0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);
faders.forEach(section=>appearOnScroll.observe(section));

// Projects 3D Hover Effect
const cards = document.querySelectorAll('.project-card');
cards.forEach(card=>{
    card.addEventListener('mousemove', e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width/2;
        const centerY = rect.height/2;
        const rotateX = ((y-centerY)/centerY)*10;
        const rotateY = ((x-centerX)/centerX)*10;
        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', e=>{
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});

// Open & Close Project Details
const viewButtons = document.querySelectorAll('.view-project-btn');
const projectDetails = document.querySelectorAll('.project-detail');
const closeButtons = document.querySelectorAll('.close-project');
viewButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const projectId = btn.parentElement.getAttribute('data-project');
        if(projectId) document.getElementById(projectId).classList.remove('hidden');
    });
});
closeButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.closest('.project-detail').classList.add('hidden');
    });
});

// Dark/Light Mode Toggle
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    toggleTheme.textContent = document.body.classList.contains('dark') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Skills Bar Animation
window.addEventListener('scroll', ()=>{
    const skillsSection = document.getElementById('skills');
    const top = skillsSection.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top < height){
        document.querySelectorAll('.skill-bar div').forEach(bar=>{
            bar.style.width = bar.style.width || bar.getAttribute('style');
        });
    }
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;
document.getElementById('next-testimonial').addEventListener('click', ()=>{
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonialCards[currentTestimonial].classList.add('active');
});
document.getElementById('prev-testimonial').addEventListener('click', ()=>{
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    testimonialCards[currentTestimonial].classList.add('active');
});

// Smooth Scroll for Navbar
document.querySelectorAll('#navbar a').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});