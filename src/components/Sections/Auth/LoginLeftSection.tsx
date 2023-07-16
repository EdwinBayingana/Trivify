import { FaRegEnvelope, FaKeycdn } from 'react-icons/fa';
import { Text, Section, TextInput, Button } from '@/components';

const LoginLeftSection = () => {
  const inputStyles =
    'flex border border-[#E6E6E6] rounded-[10px] h-[45px] w-[330px] bg-[#fff] ml-[29px]';
  const reactIconStyles = 'mt-[13px] ml-[17px] mr-[8px]';
  const textInput =
    'text-[13px] focus:outline-none border-[#E6E6E6] w-[240px] pl-[5px] my-[3px]';

  return (
    <div>
      <Section className="items-center flex flex-col min-h-screen">
        <Text className="text-4xl font-[600] pt-40">Welcome Back</Text>
        <Text className="text-[#6C6C6C] text-[14px] sm:text-[]">
          Please enter your credentials
        </Text>

        <div className="flex flex-col gap-[17px] mt-[20px]">
          <div className="flex flex-row border gap-[2px] bg-[#E6E6E6] rounded-[10px] w-[330px] h-[50px] mx-[29px]">
            <div className="w-[50%] border rounded-[10px] text-center">
              <Text className="px-[10px] h-[46px] py-[12px] bg-[#fff] rounded-[10px] text-[12px]">
                Login
              </Text>
            </div>
            <div className="border w-[50%] rounded-[10px] mr-[2px] text-center">
              <p className="px-[10px] py-[12px] text-[12px]">Signup</p>
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
          <Button className="">Continue</Button>
        </div>
      </Section>
    </div>
  );
};

export default LoginLeftSection;
