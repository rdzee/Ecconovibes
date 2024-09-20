// Function to move from Login to Sign Up form
function moveToSignUp() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('sign-up-form').style.display = 'block';
}

// Function to move from Sign Up to Login form
function moveToLogin() {
  document.getElementById('sign-up-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// Function to submit the sign-up data to Google Sheets
function signUpSubmit() {
  const username = document.getElementById('usernamee').value;
  const password = document.getElementById('passwordd').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!username || !password || !email || !phone) {
    document.getElementById('error').innerText = 'Please fill in both fields.';
    return;
  }

  const data = {
    username: username,
    password: password,
    email: email,
    phone: phone,
  };

  fetch(
    'https://script.google.com/macros/s/AKfycbz2bb-TuLGM1n3W13UDcYwh1RtoycmuZbbWXYtWcDBLnY-HO2-JQAxrqI5lsr3Zk4zN8A/exec/exec',
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 'success') {
        alert('Account created successfully!');
        moveToLogin(); // Redirect to login form after signup
      } else {
        document.getElementById(
          'error'
        ).innerText = `Error creating account: ${result.message}`;
      }
    })
    .catch((error) => {
      document.getElementById('error').innerText = error;
    });
}

// Function to log in the user
function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    document.getElementById('errorMessage').innerText =
      'Please fill in both fields.';
    return;
  }

  fetch(
    `https://script.google.com/macros/s/AKfycbz2bb-TuLGM1n3W13UDcYwh1RtoycmuZbbWXYtWcDBLnY-HO2-JQAxrqI5lsr3Zk4zN8A/exec?username=${username}&password=${password}`
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 'success') {
        alert('Login successful!');
        window.location.href = 'home.html';
      } else {
        document.getElementById('errorMessage').innerText =
          'Username or password is incorrect!';
      }
    })
    .catch((error) => {
      document.getElementById('errorMessage').innerText = error;
    });
}
