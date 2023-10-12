import Link from 'next/link';

const Home = () => {
  return (
    <section className='w-full ml-10 mr-10'>
      <h1>NextAuth.js</h1>
      <Link href="/register">Register Page</Link>
      <Link href="/login">Login Page</Link>
    </section>
  );
};

export default Home;