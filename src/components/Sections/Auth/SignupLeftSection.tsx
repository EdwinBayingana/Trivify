import { GiBrain } from 'react-icons/gi';
import { Text, Section, TextInput, Button, SignupForm } from '@/components';

type SignupLeftSectionProps = {
  toggle: () => void;
};

const SignupLeftSection: React.FC<SignupLeftSectionProps> = ({ toggle }) => {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex mt-5 gap-1">
        <GiBrain className="h-8 w-8" />
        <Text className="text-[23px]">Trivify</Text>
      </div>

      {/* Middle part of the form */}
      <SignupForm toggle={toggle} />

      <Section className="mt-auto">
        <Text className="text-greyText font-[200]">
          Join us now, and let the quest for knowledge begin!
        </Text>
      </Section>
    </Section>
  );
};

export default SignupLeftSection;
