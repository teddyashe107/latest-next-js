import Head from 'next/head';
import Button from '@/components/atoms/Button';
import dynamic from 'next/dynamic';
import Avatar from '@/components/atoms/Avatar';

const ThemeSwitch = dynamic(() => import('@/components/atoms/ThemeSwitch'), {
  ssr: false,
});

export default function Home() {
  // variadic function in typescript

  function sumVariadicSafe(...numbers: number[]) {
    return numbers.reduce((total, n) => total + n, 0);
  }

  const sum = sumVariadicSafe();

  const handleSubmit = () => {
    console.log('handle submit');
  };

  return (
    <>
      <Head>
        <title>my new portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="dark:text-white text-red-900 text-3xl font-bold">
          done with starter
        </p>
        <ThemeSwitch />
        <Button onClick={handleSubmit}>contact me</Button>
        <Avatar
          variant="yellow"
          src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
          alt="placeholder image"
        />
      </main>
    </>
  );
}
