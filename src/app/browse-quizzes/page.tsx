'use client';
import { Container, Navbar, Categories, Section, QuizCard } from '@/components';
import React, { useState } from 'react';
import { quizData } from '@/data/data';

const BrowseQuizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleSelectedCategory = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <Container className="bg-creamWhite">
      <Navbar />

      <Section className="flex justify-center mt-5">
        <Categories onCategorySelect={handleSelectedCategory} />
      </Section>

      {selectedCategory !== null && (
        <Section className="flex justify-center mt-5">
          {quizData.map((quiz, index) => (
            <QuizCard key={index} quiz={quiz} />
          ))}
        </Section>
      )}
    </Container>
  );
};

export default BrowseQuizzes;
