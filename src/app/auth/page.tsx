'use client';
import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
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
      {/* Left  */}
      <Section className="w-[50%] text-black justify-center items-center align-center">
        <Text className="text-[30px] font-[600]">Welcome Back</Text>
        <Text className="text-[#6C6C6C] text-[14px] sm:text-[]">
          Please enter your credentials
        </Text>

        <div className="flex flex-col gap-[20px] mt-[30px]">
          <div className="flex flex-row border gap-[20px] bg-[#E6E6E6] rounded-[10px] w-[220px] mx-[29px]">
            <div className="border w-[110px] rounded-[10px] text-center ml-[1px]">
              <Text className="px-[10px] py-[12px] bg-[#fff] rounded-[10px] text-[12px]">
                Sign In
              </Text>
            </div>
            <div className="rounded-[10px] mr-[2px] text-center">
              <p className="px-[10px] py-[12px] text-[12px]">Signup</p>
            </div>
          </div>
          <div className="flex border border-[#E6E6E6] rounded-[10px] h-[45px] w-[220px] bg-[#fff] ml-[29px]">
            <div className="mt-[13px] ml-[17px] mr-[8px]">
              <FaEnvelope />
            </div>

            <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
            <input
              type="text"
              placeholder="Email Address"
              className="text-[10px] focus:outline-none border-[#E6E6E6] w-[140px] pl-[5px] my-[3px]"
            />
          </div>
          {/* Password input field */}
          <div className="flex border border-[#E6E6E6] rounded-[10px] h-[45px] w-[220px] bg-[#fff] ml-[29px]">
            <div className="mt-[13px] ml-[17px] mr-[8px]">
              <FaLock />
            </div>

            <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
            <input
              type="text"
              placeholder="Password"
              className="text-[10px] focus:outline-none border-[#E6E6E6] w-[140px] pl-[5px] my-[3px]"
            />
          </div>
        </div>
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
