import Header from "@/components/ui/Header";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalance from "@/components/ui/TotalBalance";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  if(!loggedIn) redirect('/sign-in')
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn.name}
            subtext="Access and mange your account and transaction efficiently."
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1904}
          />
        </header>
        recent transactions
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance : 203.69 }, {currentBalance : 2043.69}]} />
    </section>
  );
};

export default Home;
