import { Container, Navbar, Categories, Section } from '@/components';
import React from 'react';

const BrowseQuizzes = () => {
  return (
    <Container className="bg-creamWhite">
      <Navbar />

      <Section className="flex justify-center mt-5">
        <Categories />
      </Section>
    </Container>
  );
};

export default BrowseQuizzes;
