const loginFormDisplay = () => {
  localStorage.setItem('authPageToggle', 'login');
  toggle();
};

const signupFormDisplay = () => {
  localStorage.setItem('authPageToggle', 'signup');
  toggle();
};

export { loginFormDisplay, signupFormDisplay };
