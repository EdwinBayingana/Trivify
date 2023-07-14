'use client';
import React from 'react';
import { TextInput, Button, Container } from '@/components';

const LoginPage: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className="flex justify-center items-center h-screen"></Container>
  );
};

export default LoginPage;
