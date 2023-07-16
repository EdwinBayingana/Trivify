import {
  FaRegEnvelope,
  FaKeycdn,
  FaGithub,
  FaInstagram,
  FaApple,
  FaBrain,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Text, Section, TextInput, Button } from '@/components';

const LoginLeftSection = () => {
  const inputStyles =
    'flex border border-[#E6E6E6] rounded-[10px] h-[45px] w-[330px] bg-[#fff] ml-[29px]';
  const reactIconStyles = 'mt-[13px] ml-[17px] mr-[8px]';
  const textInput =
    'text-[13px] focus:outline-none border-[#E6E6E6] w-[240px] pl-[5px] my-[3px]';
  const socialMediaIcons =
    'flex h-10 w-10 border border-[#D9D9D9] rounded-full justify-center';

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex mt-5 gap-1">
        <FaBrain className="h-8 w-8" />
        <Text className="text-[23px]">Trivify</Text>
      </div>

      {/* Middle part of the form */}
      <Section className="flex flex-col items-center justify-center mt-[100px]">
        <div className="text-center">
          <Text className="text-4xl font-[600]">Welcome Back</Text>
          <Text className="text-[#6C6C6C] py-2 text-[14px]">
            Please enter your credentials
          </Text>
        </div>

        <Section className="flex flex-col gap-[17px]">
          <div className="flex flex-row border gap-[2px] bg-[#E6E6E6] rounded-[10px] w-[330px] h-[50px] mx-[29px]">
            <div className="w-[50%] border rounded-[10px] text-center">
              <Text className="cursor-pointer px-[10px] h-[46px] py-[12px] bg-[#fff] rounded-[10px] text-[14px]">
                Sign in
              </Text>
            </div>
            <div className="border w-[50%] rounded-[10px] mr-[2px] text-center">
              <Text className="cursor-pointer px-[10px] py-[12px] text-[14px]">
                Signup
              </Text>
            </div>
          </div>
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
          {/* Password input field */}
          <div className={`${inputStyles}`}>
            <div className={reactIconStyles}>
              <FaKeycdn />
            </div>
            <ul className="border border-[#E6E6E6] w-[1px] h-7 mt-[8px] rounded mr-3 ml-3" />
            <TextInput
              type="text"
              placeholder="Password"
              className={textInput}
            />
          </div>

          <Button className="text-[14px] rounded-[10px] h-[45px] w-[330px] bg-primaryPurple ml-[29px]">
            Login
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

      <div className="mt-auto">
        <Text className="text-greyText font-[200]">
          Join us now, and let the quest for knowledge begin!
        </Text>
      </div>
    </Section>
  );
};

export default LoginLeftSection;
