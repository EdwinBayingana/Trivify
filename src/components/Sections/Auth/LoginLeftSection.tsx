import {
  FaRegEnvelope,
  FaKeycdn,
  FaGithub,
  FaInstagram,
  FaApple,
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
    <div>
      <Section className="items-center flex flex-col min-h-screen">
        <Text className="text-4xl font-[600] pt-40">Welcome Back</Text>
        <Text className="text-[#6C6C6C] pt-1 text-[14px]">
          Please enter your credentials
        </Text>

        <div className="flex flex-col gap-[17px] mt-[20px]">
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
        </div>
      </Section>
    </div>
  );
};

export default LoginLeftSection;
