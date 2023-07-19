'use client';
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Categories, Section, QuizCard } from '@/components';
import { CategoriesList } from '@/utils';
import { quizData } from '@/data/data';

import { QuizCardSkeleton } from '@/components';

const BrowseQuizzes = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulated delay to show the skeleton loaders
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectedCategory = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <Container className="bg-creamWhite">
      <Navbar />

      <Section className="flex justify-center mt-5">
        <Categories onCategorySelect={handleSelectedCategory} />
      </Section>

      {loading ? (
        <Section className="flex justify-center mt-5">
          <div className="grid grid-cols-4 gap-2">
            {/* Skeleton loader component */}
            <QuizCardSkeleton />
            <QuizCardSkeleton />
            <QuizCardSkeleton />
            <QuizCardSkeleton />
          </div>
        </Section>
      ) : (
        selectedCategory !== null && (
          <Section className="flex justify-center mt-5 mx-[310px]">
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
        )
      )}
    </Container>
  );
};

export default BrowseQuizzes;
