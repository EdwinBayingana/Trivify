'use client';
import React from 'react';
import { FaRegEnvelope, FaKeycdn } from 'react-icons/fa';
import { Container, Section, Image, LoginLeftSection } from '@/components';

const LoginPage: React.FC = () => {
  // const handleLogin = () => {};

  return (
    <Container className="flex h-screen">
      {/* Left side  */}
      <Section className="w-[50%] text-black justify-center items-center align-center">
        <LoginLeftSection />
      </Section>

      {/* Right side */}
      <Section className="w-[50%] flex flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&q=80"
          className="min-h-screen min-w-full"
          alt={''}
        />
      </Section>
    </Container>
  );
};

export default LoginPage;
