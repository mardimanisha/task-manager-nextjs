import { Board } from '@/Components/Board';
import { Sidebar } from '@/Components/Sidebar';
import { Tasks } from '@/Components/Tasks';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager App</title>
      </Head>
      <div className='flex h-screen'>
        <Sidebar />
        <Board />
        
      </div>
    </>
  );
}