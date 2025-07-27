/**
 * Portfolio Website - Mukunda Jamar Katel
 * Main JavaScript File - No Bootstrap Dependency
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Mobile navigation toggle
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');
    
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav item
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Hide mobile menu after clicking
            if (window.innerWidth < 992 && navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
            }
        });
    });
    
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-shrink');
            } else {
                navbar.classList.remove('navbar-shrink');
            }
        });
    }
    
    // Highlight current section in navbar
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar .nav-link');
        const scrollPosition = window.scrollY;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentSection);
    
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.animated');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
            
            if (isVisible && !element.classList.contains('fadeIn')) {
                element.classList.add('fadeIn');
            }
        });
    }
    
    // Initial check and add scroll event listener
    checkIfInView();
    window.addEventListener('scroll', checkIfInView);
    
    // 3D background animation for hero section
    initHero3DBackground();
    
    // Initialize skill animation
    initSkillCards();
    
    // Initialize form animation and validation
    initContactForm();
});

// 3D Animated Background
function initHero3DBackground() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    // Create scene container
    const sceneContainer = document.createElement('div');
    sceneContainer.id = 'scene-container';
    sceneContainer.classList.add('scene-container');
    heroSection.prepend(sceneContainer);
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    sceneContainer.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 30;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const positionArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        // Position (x, y, z)
        positionArray[i] = (Math.random() - 0.5) * 100;
        
        // Color (r, g, b)
        colorArray[i] = Math.random() * 0.5 + 0.5; // Brighter colors
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Start animation
    animate();
}

// 3D Rotating Skill Cards
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                rotationY: 15,
                rotationX: -15,
                scale: 1.05,
                boxShadow: '0 30px 30px rgba(0,0,0,0.2)',
                ease: 'power2.out',
                duration: 0.5
            });
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width - 0.5;
            const yPercent = y / rect.height - 0.5;
            
            gsap.to(this, {
                rotationY: xPercent * 20,
                rotationX: -yPercent * 20,
                ease: 'power2.out',
                duration: 0.5
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                rotationY: 0,
                rotationX: 0,
                scale: 1,
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                ease: 'power2.out',
                duration: 0.5
            });
        });
    });
}

// Contact Form Animations and Validation
function initContactForm() {
    const contactForm = document.querySelector('#terminalForm');
    if (!contactForm) return;
    
    // Add terminal typing animation for command prompts
    const terminalOutput = document.getElementById('terminalOutput');
    
    // Focus animations for form inputs
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        // Initial animation
        gsap.set(input, { 
            borderColor: 'transparent',
            boxShadow: '0 0 0 rgba(0,255,65,0)'
        });
        
        // Customize placeholder text
        if (input.name === 'name') {
            input.placeholder = 'Enter your name...';
        } else if (input.name === 'email') {
            input.placeholder = 'Enter your email address...';
        } else if (input.name === 'subject') {
            input.placeholder = 'Enter message subject...';
        } else if (input.name === 'message') {
            input.placeholder = 'Type your message here...';
        }
        
        // Typing sound effect simulation
        input.addEventListener('keydown', function(e) {
            if (e.key !== 'Tab' && e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Alt') {
                const volume = 0.1; // Keep volume low
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.value = 600 + Math.random() * 200;
                gainNode.gain.value = volume;
                
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                oscillator.start();
                setTimeout(() => {
                    oscillator.stop();
                }, 20);
            }
        });
        
        // Focus animation
        input.addEventListener('focus', function() {
            const cursorBlink = document.createElement('span');
            cursorBlink.classList.add('cursor-blink');
            cursorBlink.textContent = '|';
            
            gsap.to(this, {
                borderColor: 'var(--primary-color)',
                boxShadow: '0 0 5px rgba(0,255,65,0.2)',
                duration: 0.3
            });
        });
        
        // Blur animation
        input.addEventListener('blur', function() {
            gsap.to(this, {
                boxShadow: '0 0 0 rgba(0,255,65,0)',
                duration: 0.3
            });
        });
    });
    
    // Submit button animation
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    submitButton.addEventListener('mouseenter', function() {
        gsap.to(this, {
            boxShadow: '0 0 15px rgba(0,255,65,0.4)',
            duration: 0.3
        });
    });
    
    submitButton.addEventListener('mouseleave', function() {
        gsap.to(this, {
            boxShadow: '0 0 10px rgba(0,255,65,0.1)',
            duration: 0.3
        });
    });
    
    // Custom form validation with terminal output message
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        formInputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                
                // Add error message to terminal output
                const errorLine = document.createElement('div');
                errorLine.classList.add('terminal-line');
                errorLine.style.color = 'var(--danger-color)';
                errorLine.textContent = `Error: ${input.name} is required`;
                terminalOutput.appendChild(errorLine);
                
                // Scroll to bottom of output
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
        
        if (!isValid) {
            e.preventDefault();
        } else {
            // Add processing message to terminal
            const processingLine = document.createElement('div');
            processingLine.classList.add('terminal-line');
            processingLine.textContent = '> Processing message...';
            terminalOutput.appendChild(processingLine);
            
            // Add button loading state and animation
            submitButton.disabled = true;
            submitButton.classList.add('btn-loading');
            gsap.to(submitButton, {
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                boxShadow: '0 0 15px rgba(0, 255, 65, 0.5)',
                repeat: -1,
                yoyo: true,
                duration: 0.8
            });
        }
    });
} 