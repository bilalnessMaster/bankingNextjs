import Header from "@/components/ui/Header";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalance from "@/components/ui/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Adrian", lastName: "jsm " , email : 'jsm@example.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
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
