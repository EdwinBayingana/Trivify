'use client';
import { useState } from 'react';
import {
  Container,
  Section,
  Image,
  LoginLeftSection,
  SignupLeftSection,
} from '@/components';

const LoginPage: React.FC = () => {
  const initialToggleStatus = localStorage.getItem('authPageToggle') || '';
  const [isLogin, setIsLogin] = useState(initialToggleStatus === 'login');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    localStorage.setItem('authPageToggle', isLogin ? 'signup' : 'login');
  };

  return (
    <Container className="flex h-screen">
      {/* Left side  */}
      <Section className="w-[50%] text-black justify-center items-center align-center">
        {isLogin ? (
          <LoginLeftSection toggle={handleToggle} />
        ) : (
          <SignupLeftSection toggle={handleToggle} />
        )}
      </Section>

      {/* Right side */}
      <Section className="w-[50%] flex flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&q=80"
          className="min-h-screen min-w-full"
          alt="Rubiks cube"
        />
      </Section>
    </Container>
  );
};

export default LoginPage;
