import Link from 'next/link';
import { Button, Container, Navbar } from '@/components';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <main>
      <Container className="bg-creamWhite">
        <Navbar />
      </Container>
    </main>
  );
}
