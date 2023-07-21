'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  Section,
  Text,
  Image,
  AllTimeLeaderboardTable,
} from '@/components';

const page = () => {
  return (
    <Container>
      <Navbar />
      <Section className="flex justify-center">
        <div className="flex flex-row justify-centeritems-center border gap-[2px] bg-[#E6E6E6] rounded-[10px] w-[330px] h-[50px] mx-[29px]">
          <div className="w-[50%] border rounded-[10px] text-center">
            <Text className="cursor-pointer text-black px-[10px] h-[46px] py-[12px] bg-[#fff] rounded-[10px] text-[14px]">
              All Time
            </Text>
          </div>
          <div className="border w-[50%] rounded-[10px] mr-[2px] text-center">
            <Text className="cursor-pointer text-black px-[10px] py-[12px] text-[14px]">
              Last 30 Days
            </Text>
          </div>
        </div>
      </Section>
      <Section className="flex flex-row gap-[30px] justify-center items-center mt-5">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="2nd on leaderboard"
            className="text-gray-600 mt-5 w-[150px] h-[150px] rounded-full object-cover"
          />
          <Text className="text-black text-[18px] text-center py-2">
            2. Jane
          </Text>
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="1st on leaderboard"
            className="text-gray-600 w-[200px] h-[200px] rounded-full object-cover"
          />
          <Text className="text-black text-[18px] text-center py-2">
            1. Smith
          </Text>
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            alt="3rd on leaderboard"
            className="text-gray-600 mt-5 w-[150px] h-[150px] rounded-full object-cover"
          />
          <Text className="text-black text-[18px] text-center py-2">
            3. Doe
          </Text>
        </div>
      </Section>
      <Section className="">
        <AllTimeLeaderboardTable />
      </Section>
    </Container>
  );
};

export default page;
