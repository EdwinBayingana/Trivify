import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex text-[25px] flex-col items-center justify-between p-24">
      <h1>Quiz App</h1>
      <Link href="/quiz">
        <button className="bg-gray-700 w-[100px] py-auto rounded-sm border text-[#c2c2c2c2]">
          Start
        </button>
      </Link>
    </main>
  );
}
