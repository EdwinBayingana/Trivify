import Link from 'next/link';
import {
  Button,
  Container,
  Navbar,
  HomeLeftSection,
  HomeRightSection,
  Section,
} from '@/components';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <main>
      <Container className="bg-creamWhite">
        <Navbar />
        <Section className="flex">
          <HomeLeftSection />
          <HomeRightSection />
        </Section>
      </Container>
    </main>
  );
}
