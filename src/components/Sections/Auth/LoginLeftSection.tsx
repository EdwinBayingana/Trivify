'use client';
import { GiBrain } from 'react-icons/gi';
import { Text, Section, TextInput, Button, LoginForm } from '@/components';

type LoginLeftSectionProps = {
  toggle: () => void;
};

const LoginLeftSection: React.FC<LoginLeftSectionProps> = ({ toggle }) => {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex mt-5 gap-1">
        <GiBrain className="h-8 w-8" />
        <Text className="text-[23px]">Trivify</Text>
      </div>

      {/* Middle part of the form */}
      <LoginForm toggle={toggle} />

      <Section className="mt-auto">
        <Text className="text-greyText font-[200]">
          Join us now, and let the quest for knowledge begin!
        </Text>
      </Section>
    </Section>
  );
};

export default LoginLeftSection;
