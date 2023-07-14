'use client';
import React from 'react';
import {
  TextInput,
  Button,
  Container,
  Text,
  Section,
  Image,
} from '@/components';

const LoginPage: React.FC = () => {
  // const handleLogin = () => {};

  return (
    <Container className="flex h-screen">
      {/* Left */}
      <Section className="w-[50%] justify-center items-center align-center">
        <Text>Welcome Back</Text>
      </Section>

      {/* Right */}
      <Section className="w-[50%]">
        <Image
          src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1260&q=80"
          className="h-screen"
        />
      </Section>
    </Container>
  );
};

export default LoginPage;
