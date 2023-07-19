'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Triangle } from 'react-loader-spinner';
import { Section, Text, Button } from '@/components';
import React from 'react';

const HomeLeftSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBrowseRedirect = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // Redirect to the browse page
      // router.push('/');
    }, 4000);
  };

  return (
    <Section className="flex flex-col min-h-full min-w-[50%]">
      <Text className="font-semibold text-3xl text-black ml-[135px] mt-[100px]">
        Challenge Your Knowledge <br /> with Exciting Online Quizzes!
      </Text>
      <Text className="text-[18px] font-light text-greyText ml-[135px] w-[400px] mt-[10px]">
        Whether you're a trivia enthusiast, a pop culture buff, or simply love
        challenging your knowledge, our platform offers a wide range of engaging
        quizzes to put your skills to the test.
      </Text>
      <Text className="text-[18px] font-light text-greyText ml-[135px] w-[400px] mt-[30px]">
        Are you ready for the ultimate quiz experience? Join us now!"
      </Text>

      <Section className="flex ml-[135px] gap-[10px] mt-[30px]">
        <Link href="/browse-quizzes" onClick={handleBrowseRedirect}>
          <Button
            className="w-[160px] py-3 bg-primaryPurple text-[13px] rounded-lg justify-center flex text-center"
            // onClick={handleBrowseRedirect}
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <Triangle
                height="20px"
                width="20px"
                color="#ffffff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                visible={true}
              />
            ) : (
              'Browse Quizzes'
            )}
          </Button>
        </Link>
        <Button className="w-[160px] py-3 bg-white text-primaryPurple border border-primaryPurple text-[13px] rounded-lg">
          View Profile
        </Button>
      </Section>
    </Section>
  );
};

export default HomeLeftSection;
