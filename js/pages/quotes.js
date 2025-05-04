
/**
 * Quotes page functionality for OtakuVerse
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const quoteCard = document.getElementById('quote-card');
  const quoteText = document.getElementById('quote-text');
  const quoteCharacter = document.getElementById('quote-character');
  const quoteAnime = document.getElementById('quote-anime');
  const loadingSpinner = document.getElementById('loading-spinner');
  const quoteError = document.getElementById('quote-error');
  const getQuoteButton = document.getElementById('get-quote');
  const buttonText = document.getElementById('button-text');
  
  // Fetch random quote on initial load
  fetchRandomQuote();
  
  // Event listeners
  if (getQuoteButton) {
    getQuoteButton.addEventListener('click', () => {
      fetchRandomQuote();
    });
  }
  
  /**
   * Fetch a random anime quote
   */
  async function fetchRandomQuote() {
    // Show loading state
    if (loadingSpinner) loadingSpinner.style.display = 'flex';
    if (quoteCard) quoteCard.style.display = 'none';
    if (quoteError) quoteError.style.display = 'none';
    
    if (getQuoteButton) {
      getQuoteButton.disabled = true;
      if (buttonText) buttonText.textContent = 'Loading...';
    }
    
    try {
      // Add a delay to prevent rate limiting
      const delayPromise = new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('https://animechan.xyz/api/random');
      await delayPromise; // Ensure at least 800ms delay for UX
      
      if (!response.ok) throw new Error('Failed to fetch quote');
      
      const data = await response.json();
      displayQuote(data);
      
      if (loadingSpinner) loadingSpinner.style.display = 'none';
      if (quoteCard) quoteCard.style.display = 'block';
    } catch (error) {
      console.error('Error fetching quote:', error);
      if (loadingSpinner) loadingSpinner.style.display = 'none';
      if (quoteError) quoteError.style.display = 'block';
      
      window.utils.showToast({
        title: "Error",
        description: "Failed to load quote. Please try again later.",
        variant: "error",
      });
    } finally {
      if (getQuoteButton) {
        getQuoteButton.disabled = false;
        if (buttonText) buttonText.textContent = 'Get New Quote';
      }
    }
  }
  
  /**
   * Display a quote in the UI
   * @param {Object} quote - Quote object with anime, character, and quote properties
   */
  function displayQuote(quote) {
    if (quoteText) quoteText.textContent = quote.quote;
    if (quoteCharacter) quoteCharacter.textContent = quote.character;
    if (quoteAnime) quoteAnime.textContent = quote.anime;
    
    // Reset the animation to trigger it again
    if (quoteCard) {
      quoteCard.style.animation = 'none';
      setTimeout(() => {
        quoteCard.style.animation = '';
      }, 10);
    }
    
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
});
