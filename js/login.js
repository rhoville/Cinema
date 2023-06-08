document.addEventListener("DOMContentLoaded", function () {
  const state = {
    email: "",
    password: "",
    showRegistration: false,
    firstName: "",
    lastName: "",
    birthday: ""
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    state[name] = value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = state;
    
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    window.location.href = "main.html";
  }

  function handleRegister() {
    state.showRegistration = !state.showRegistration;
    renderForm();
  }

  function handleRegistrationSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, birthday, email } = state;
    // Perform registration logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Birthday:", birthday);
    console.log("Email:", email);
  }

  function handleGoogleSignUp() {
    // Perform Google sign up logic here
    console.log("Signing up with Google...");
  }

  function handleFacebookSignUp() {
    // Perform Facebook sign up logic here
    console.log("Signing up with Facebook...");
  }

  function renderLoginForm() {
    const { email, password } = state;

    return `
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value="${email}" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value="${password}" required>
        </div>
        <div class="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    `;
  }

  function renderRegistrationForm() {
    const { firstName, lastName, birthday, email } = state;

    return `
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value="${firstName}" required>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value="${lastName}" required>
        </div>
        <div class="form-group">
          <label for="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" value="${birthday}" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value="${email}" required>
        </div>
        <div class="form-group">
          <button type="submit">Register</button>
        </div>
        <div class="social-login">
          <button onClick="handleGoogleSignUp()">
            <img src="images/google.png" alt="Google" />
            Sign up with Google
          </button>
          <button onClick="handleFacebookSignUp()">
            <img src="images/fb.png" alt="Facebook" />
            Sign up with Facebook
          </button>
        </div>
      </form>
    `;
  }

  function renderForm() {
    const { showRegistration } = state;

    const container = document.querySelector(".container");
    const loginBox = document.createElement("div");
    loginBox.classList.add("login-box");

    const title = document.createElement("h2");
    title.textContent = showRegistration ? "Register" : "Login";
    loginBox.appendChild(title);

    if (showRegistration) {
      loginBox.innerHTML += renderRegistrationForm();
    } else {
      loginBox.innerHTML += renderLoginForm();
    }

    const registerLink = document.createElement("div");
    registerLink.classList.add("register-link");

    const registerButton = document.createElement("button");
    registerButton.textContent = showRegistration ? "Back to Login" : "Register";
    registerButton.addEventListener("click", handleRegister);
    registerLink.appendChild(registerButton);

    loginBox.appendChild(registerLink);
    container.innerHTML = "";
    container.appendChild(loginBox);
  }

  function initializeApp() {
    renderForm();
  }

  initializeApp();
});
