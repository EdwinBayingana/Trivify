import { Section, Text, Button } from '@/components';
import React from 'react';

const HomeLeftSection = () => {
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
        <Button className="w-43 px-10 py-3 bg-primaryPurple text-[13px] rounded-lg">
          Browse Quizzes
        </Button>

        <Button className="w-43 px-12 py-3 bg-white text-primaryPurple border border-primaryPurple text-[13px] rounded-lg">
          View Profile
        </Button>
      </Section>
    </Section>
  );
};

export default HomeLeftSection;
