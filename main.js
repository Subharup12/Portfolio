// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Hero button click to scroll to the projects section
    const heroButton = document.querySelector('.hero button');
    const projectsSection = document.querySelector('.projects');
  
    if (heroButton && projectsSection) {
      heroButton.addEventListener('click', () => {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    // Neon animation effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.transition = 'box-shadow 0.3s ease-in-out';
        card.style.boxShadow = '0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14';
      });
      card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
      });
    });
  
    // Dynamic loading animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.3 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Contact form submission alert
    const contactForm = document.querySelector('form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
      });
    }
  });
  
