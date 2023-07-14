import Link from 'next/link';
import { Button } from '@/components';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <main className="flex text-[25px] flex-col items-center justify-between p-24">
      <h1>Quiz App</h1>
      <Link href="/quiz">
        <Button onClick={handleButtonClick}>Start</Button>
      </Link>
    </main>
  );
}
