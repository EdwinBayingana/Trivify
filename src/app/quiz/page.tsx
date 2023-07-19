'use client';
import React, { useState, useEffect } from 'react';
import {
  QuizLeftSide,
  QuizRightSide,
  Container,
  Navbar,
  Section,
} from '@/components';

const SingleQuizPage = () => {
  return (
    <Container className="text-black">
      <Navbar />
      <Section className="flex">
        <QuizLeftSide />
        <QuizRightSide />
      </Section>
    </Container>
  );
};

export default SingleQuizPage;
