
/**
 * Index page functionality for OtakuVerse
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Newsletter subscription functionality
  const newsletterInput = document.querySelector('.newsletter-input');
  const subscribeButton = document.querySelector('.newsletter-box .secondary-button');
  
  if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
      const email = newsletterInput.value.trim();
      
      if (!email) {
        window.utils.showToast({
          title: "Error",
          description: "Please enter your email address.",
          variant: "error",
        });
        return;
      }
      
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        window.utils.showToast({
          title: "Error",
          description: "Please enter a valid email address.",
          variant: "error",
        });
        return;
      }
      
      // For demo purposes, just show a success message
      window.utils.showToast({
        title: "Success",
        description: "Thanks for subscribing to our newsletter!",
        variant: "success",
      });
      
      newsletterInput.value = '';
    });
  }
  
  // Add hover animation to card stack
  const animeCardPreviews = document.querySelectorAll('.anime-card-preview');
  
  animeCardPreviews.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
      // Reset to original z-index after a short delay
      setTimeout(() => {
        if (card.classList.contains('anime-card-preview-1')) {
          card.style.zIndex = '3';
        } else if (card.classList.contains('anime-card-preview-2')) {
          card.style.zIndex = '2';
        } else {
          card.style.zIndex = '1';
        }
      }, 300);
    });
  });
});
