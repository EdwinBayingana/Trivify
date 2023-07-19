'use client';
import React, { useState } from 'react';
import { Container, Navbar, Categories, Section, QuizCard } from '@/components';
import { CategoriesList } from '@/utils';
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
        <Section className="flex justify-center mt-5 border border-black mx-[300px]">
          <div className="grid grid-cols-4 gap-2">
            {quizData
              .filter(
                (quiz) => quiz.category === CategoriesList[selectedCategory],
              )
              .map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
          </div>
        </Section>
      )}
    </Container>
  );
};

export default BrowseQuizzes;
