document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const signupLink = document.getElementById('signup-link');
  const loginLink = document.getElementById('login-link');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const guestBtn = document.getElementById('guest-btn');

  // Toggle between login and signup forms
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Handle signup
  signupBtn.addEventListener('click', () => {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!username || !password || !confirmPassword) {
      showToast('error', 'Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      showToast('error', 'Error', 'Passwords do not match');
      return;
    }

    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      showToast('error', 'Error', 'Username already exists');
      return;
    }

    // Store user credentials
    users[username] = {
      password: password,
      watchlist: []
    };
    localStorage.setItem('users', JSON.stringify(users));
    showToast('success', 'Success', 'Account created successfully! You can now log in.');
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    document.getElementById('confirm-password').value = '';
  });

  // Handle login
  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
      showToast('error', 'Error', 'Please fill in all fields');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (!users[username] || users[username].password !== password) {
      showToast('error', 'Error', 'Invalid username or password');
      return;
    }

    localStorage.setItem('currentUser', username);
    localStorage.removeItem('isGuest');
    showToast('success', 'Success', 'Logged in successfully!');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });

  // Handle guest mode
  guestBtn.addEventListener('click', () => {
    localStorage.setItem('isGuest', 'true');
    localStorage.removeItem('currentUser');
    showToast('info', 'Guest Mode', 'Continuing as a guest. Your actions will not be saved.');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  });
});