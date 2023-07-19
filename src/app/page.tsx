import {
  Button,
  Container,
  Navbar,
  HomeLeftSection,
  HomeRightSection,
  Section,
} from '@/components';

export default function Home() {
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
