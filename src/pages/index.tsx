import { Board } from '@/Components/Board';
import Head from 'next/head';
export default function Home() {
  return (
    <>
    <Head>
    <title>Task Manager App</title>
  </Head>
  <Board />
</>
  );
}
