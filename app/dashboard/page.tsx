'use client';

import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();
    console.log(session?.user?.email);
  return (
    <div className="mt-20 mr-10 ml-10">
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default Dashboard;