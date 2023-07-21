const loginFormDisplay = ({ toggle }: { toggle: () => void }) => {
  localStorage.setItem('authPageToggle', 'login');
  toggle();
};

const signupFormDisplay = ({ toggle }: { toggle: () => void }) => {
  localStorage.setItem('authPageToggle', 'signup');
  toggle();
};

export { loginFormDisplay, signupFormDisplay };
