document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Animate sections when scrolling
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.style.width;
                skillLevel.style.width = '0';
                
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});





document.getElementById('downloadBtn').addEventListener('click', function() {
    const filePath = 'files/my-cv.pdf'; // Path to your PDF
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Your-Name-CV.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const downloadBtn = document.getElementById('downloadBtn');
//     const formatSelect = document.getElementById('formatSelect');
    
//     // CV file paths (replace with your actual file paths)
//     const cvFiles = {
//         pdf: 'files/my-cv.pdf',
//         docx: 'files/my-cv.docx',
//         txt: 'files/my-cv.txt'
//     };
    
//     // Download button click handler
//     downloadBtn.addEventListener('click', function() {
//         const selectedFormat = formatSelect.value;
//         const filePath = cvFiles[selectedFormat];
        
//         if (filePath) {
//             downloadFile(filePath);
//         } else {
//             alert('Selected format is not available.');
//         }
//     });
    
//     // Function to trigger file download
//     function downloadFile(filePath) {
//         // Create a temporary anchor element
//         const link = document.createElement('a');
//         link.href = filePath;
        
//         // Extract filename from path
//         const fileName = filePath.split('/').pop();
//         link.download = fileName;
        
//         // Append to body, click and remove
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
        
//         // Optional: Show download confirmation
//         showDownloadConfirmation(fileName);
//     }
    
//     // Optional: Show download confirmation
//     function showDownloadConfirmation(fileName) {
//         const originalText = downloadBtn.innerHTML;
        
//         // Change button text temporarily
//         downloadBtn.innerHTML = `<i class="fas fa-check"></i> Downloading...`;
//         downloadBtn.style.backgroundColor = '#4CAF50';
        
//         // Revert after 2 seconds
//         setTimeout(() => {
//             downloadBtn.innerHTML = originalText;
//             downloadBtn.style.backgroundColor = '#6e8efb';
//         }, 2000);
//     }
// });