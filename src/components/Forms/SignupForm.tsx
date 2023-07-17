import { FaRegEnvelope, FaKeycdn, FaGithub, FaApple } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { RiKey2Line } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

import { Text, Section, TextInput, Button } from '@/components';

type SignupFormSectionProps = {
  toggle: () => void;
};

const SignupForm: React.FC<SignupFormSectionProps> = ({ toggle }) => {
  const signupFormDisplay = () => {
    localStorage.setItem('authPageToggle', 'signup');
    toggle();
  };

  const loginFormDisplay = () => {
    localStorage.setItem('authPageToggle', 'login');
    toggle();
  };

  const inputStyles =
    'flex border border-[#c7c7c7] rounded-[10px] h-[45px] w-[330px] bg-[#fff] ml-[29px]';
  const reactIconStyles = 'mt-[13px] ml-[17px] mr-[8px]';
  const textInput =
    'text-[13px] focus:outline-none border-[#c7c7c7] w-[240px] pl-[5px] my-[3px]';
  const socialMediaIcons =
    'flex h-10 w-10 border border-[#D9D9D9] rounded-full justify-center';
  return (
    <Section className="flex flex-col items-center justify-center mt-[50px]">
      <div className="text-center">
        <Text className="text-4xl font-[600]">Create Your Account</Text>
        <Text className="text-[#6C6C6C] py-2 text-[14px]">
          Please fill in the details below
        </Text>
      </div>

      <Section className="flex flex-col gap-[17px]">
        <div
          className="flex flex-row border gap-[2px] bg-[#E6E6E6] rounded-[10px] w-[330px] h-[50px] mx-[29px]"
          onClick={loginFormDisplay}
        >
          <div className="w-[50%] border rounded-[10px] text-center">
            <Text className="cursor-pointer px-[10px] h-[46px] py-[12px] text-[14px]">
              Sign in
            </Text>
          </div>
          <div
            className="border w-[50%] rounded-[10px] text-center"
            onClick={signupFormDisplay}
          >
            <Text className="cursor-pointer py-[12.5px] text-[14px] bg-[#fff] rounded-[10px]">
              Signup
            </Text>
          </div>
        </div>

        {/* Email input field */}
        <div className={`${inputStyles}`}>
          <div className={reactIconStyles}>
            <FaRegEnvelope />
          </div>

          <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
          <TextInput
            type="text"
            placeholder="Email Address"
            className={textInput}
          />
        </div>
        {/* Username input field */}
        <div className={`${inputStyles}`}>
          <div className={reactIconStyles}>
            <CiUser />
          </div>
          <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
          <TextInput type="text" placeholder="Username" className={textInput} />
        </div>
        {/* Password input field */}
        <div className={`${inputStyles}`}>
          <div className={reactIconStyles}>
            <RiKey2Line />
          </div>
          <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
          <TextInput type="text" placeholder="Password" className={textInput} />
        </div>
        {/* Confirm Password input field */}
        <div className={`${inputStyles}`}>
          <div className={reactIconStyles}>
            <FaKeycdn />
          </div>
          <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
          <TextInput
            type="text"
            placeholder="Confirm Password"
            className={textInput}
          />
        </div>

        <Button className="text-white text-[14px] rounded-[10px] h-[45px] w-[330px] bg-primaryPurple ml-[29px]">
          Continue
        </Button>

        <div className="flex align-center justify-center">
          <ul className="mt-[13px] border border-[#E6E6E6] w-[100px] h-[0.5px] rounded mx-3" />
          <Text className="pt-1 text-[13px] text-center text-greyText text-[]">
            or Continue with
          </Text>
          <ul className="mt-[13px] border border-[#E6E6E6] w-[100px] h-[0.5px] rounded mx-3" />
        </div>

        <div className="flex justify-center gap-4">
          <div className={socialMediaIcons}>
            <FcGoogle className="h-7 w-7 mt-[5px]" />
          </div>
          <FaGithub className="h-11 w-11" />
          <div className={socialMediaIcons}>
            <FaApple className="h-5 w-5 mt-[8px]" />
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default SignupForm;
