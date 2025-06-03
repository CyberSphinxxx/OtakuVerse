
/**
 * Index page functionality for OtakuVerse
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
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

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing event listeners');
  lucide.createIcons();

  // DOM elements
  const userToggle = document.getElementById('user-toggle');
  const userDropdown = document.getElementById('user-dropdown');
  const loginLink = document.getElementById('login-link');
  const mobileLoginLink = document.getElementById('mobile-login-link');
  const logoutBtn = document.getElementById('logout-btn');
  const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
  const loginModal = document.getElementById('login-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const signupLink = document.getElementById('signup-link');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const guestBtn = document.getElementById('guest-btn');
  const userStatus = document.getElementById('user-status');
  const dropdownUserStatus = document.getElementById('dropdown-user-status');
  const mobileUserStatus = document.getElementById('mobile-user-status');
  const togglePassword = document.getElementById('toggle-password');
  const toggleSignupPassword = document.getElementById('toggle-signup-password');
  const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
  const passwordInput = document.getElementById('password');
  const signupPasswordInput = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  // Fallback toast function if showToast is undefined
  const toast = (type, title, message) => {
    if (typeof showToast === 'function') {
      showToast(type, title, message);
    } else {
      console.log(`[${type}] ${title}: ${message}`);
      alert(`${title}: ${message}`);
    }
  };

  // Update user status in navigation
  function updateUserStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const isGuest = localStorage.getItem('isGuest') === 'true';
    console.log('Updating user status:', { currentUser, isGuest });

    if (currentUser) {
      userStatus.textContent = currentUser;
      dropdownUserStatus.textContent = `Hi, ${currentUser}`;
      mobileUserStatus.textContent = currentUser;
      loginLink.style.display = 'none';
      mobileLoginLink.style.display = 'none';
      logoutBtn.style.display = 'block';
      mobileLogoutBtn.style.display = 'flex';
    } else if (isGuest) {
      userStatus.textContent = 'Guest';
      dropdownUserStatus.textContent = 'Guest Mode';
      mobileUserStatus.textContent = 'Guest';
      loginLink.style.display = 'block';
      mobileLoginLink.style.display = 'flex';
      logoutBtn.style.display = 'none';
      mobileLogoutBtn.style.display = 'none';
    } else {
      userStatus.textContent = 'Login';
      dropdownUserStatus.textContent = 'Login';
      mobileUserStatus.textContent = 'Login';
      loginLink.style.display = 'block';
      mobileLoginLink.style.display = 'flex';
      logoutBtn.style.display = 'none';
      mobileLogoutBtn.style.display = 'none';
    }
  }

  // Clear form inputs
  function clearFormInputs() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
    passwordInput.type = 'password';
    signupPasswordInput.type = 'password';
    confirmPasswordInput.type = 'password';
    togglePassword.innerHTML = '<i data-lucide="eye"></i>';
    toggleSignupPassword.innerHTML = '<i data-lucide="eye"></i>';
    toggleConfirmPassword.innerHTML = '<i data-lucide="eye"></i>';
    lucide.createIcons();
  }

  // Event listeners
  if (userToggle) {
    userToggle.addEventListener('click', (e) => {
      console.log('User toggle clicked');
      e.stopPropagation();
      userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
    });
  }

  document.addEventListener('click', (e) => {
    if (userDropdown && !userToggle.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.style.display = 'none';
    }
  });

  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      console.log('Login link clicked');
      e.preventDefault();
      loginModal.style.display = 'flex';
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      clearFormInputs();
    });
  }

  if (mobileLoginLink) {
    mobileLoginLink.addEventListener('click', (e) => {
      console.log('Mobile login link clicked');
      e.preventDefault();
      loginModal.style.display = 'flex';
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      clearFormInputs();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      console.log('Modal close button clicked');
      loginModal.style.display = 'none';
      clearFormInputs();
    });
  }

  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        console.log('Clicked outside modal');
        loginModal.style.display = 'none';
        clearFormInputs();
      }
    });
  }

  if (signupLink) {
    signupLink.addEventListener('click', (e) => {
      console.log('Signup link clicked');
      e.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      clearFormInputs();
    });
  }

  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      console.log('Login link in signup form clicked');
      e.preventDefault();
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
      clearFormInputs();
    });
  }

  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      console.log('Toggle password visibility');
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
      togglePassword.innerHTML = type === 'password' ? '<i data-lucide="eye"></i>' : '<i data-lucide="eye-off"></i>';
      lucide.createIcons();
    });
  }

  if (toggleSignupPassword) {
    toggleSignupPassword.addEventListener('click', () => {
      console.log('Toggle signup password visibility');
      const type = signupPasswordInput.type === 'password' ? 'text' : 'password';
      signupPasswordInput.type = type;
      toggleSignupPassword.innerHTML = type === 'password' ? '<i data-lucide="eye"></i>' : '<i data-lucide="eye-off"></i>';
      lucide.createIcons();
    });
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('click', () => {
      console.log('Toggle confirm password visibility');
      const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
      confirmPasswordInput.type = type;
      toggleConfirmPassword.innerHTML = type === 'password' ? '<i data-lucide="eye"></i>' : '<i data-lucide="eye-off"></i>';
      lucide.createIcons();
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      console.log('Signup button clicked');
      const username = document.getElementById('signup-username').value.trim();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (!username || !password || !confirmPassword) {
        toast('error', 'Error', 'Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        toast('error', 'Error', 'Passwords do not match');
        return;
      }

      if (username.length < 3) {
        toast('error', 'Error', 'Username must be at least 3 characters long');
        return;
      }

      if (password.length < 6) {
        toast('error', 'Error', 'Password must be at least 6 characters long');
        return;
      }

      let users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[username]) {
        toast('error', 'Error', 'Username already exists');
        return;
      }

      users[username] = {
        password: password,
        watchlist: []
      };
      localStorage.setItem('users', JSON.stringify(users));
      console.log('User created:', { username, watchlist: [] });
      toast('success', 'Success', 'Account created successfully! Please log in.');
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
      clearFormInputs();
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      console.log('Login button clicked');
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;

      if (!username || !password) {
        toast('error', 'Error', 'Please fill in all fields');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (Object.keys(users).length === 0 || !users[username] || users[username].password !== password) {
        toast('error', 'Error', 'Incorrect username or password');
        return;
      }

      localStorage.setItem('currentUser', username);
      localStorage.removeItem('isGuest');
      console.log('User logged in:', username);
      toast('success', 'Success', `Welcome back, ${username}!`);
      loginModal.style.display = 'none';
      updateUserStatus();
      clearFormInputs();
    });
  }

  if (guestBtn) {
    guestBtn.addEventListener('click', () => {
      console.log('Guest button clicked');
      localStorage.setItem('isGuest', 'true');
      localStorage.removeItem('currentUser');
      toast('info', 'Guest Mode', 'Exploring as a guest.');
      loginModal.style.display = 'none';
      updateUserStatus();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      console.log('Logout button clicked');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isGuest');
      toast('info', 'Logged Out', 'You have been logged out.');
      userDropdown.style.display = 'none';
      updateUserStatus();
    });
  }

  if (mobileLogoutBtn) {
    mobileLogoutBtn.addEventListener('click', () => {
      console.log('Mobile logout button clicked');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('isGuest');
      toast('info', 'Logged Out', 'You have been logged out.');
      updateUserStatus();
    });
  }

  // Initialize user status
  console.log('Initializing user status');
  updateUserStatus();
});