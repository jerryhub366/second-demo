document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            document.body.classList.toggle('zh-mode');
            
            // Update button text based on current language
            if (document.body.classList.contains('zh-mode')) {
                languageToggle.textContent = '中文 | EN';
            } else {
                languageToggle.textContent = 'EN | 中文';
            }
        });
    }
    
    // Email form submission
    const emailForm = document.getElementById('email-form');
    const formSuccess = document.getElementById('form-success');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this static demo, we'll just show the success message
            emailForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
            
            // Reset form fields
            emailForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});