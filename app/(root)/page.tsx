import Header from "@/components/ui/Header";
import RecentTransactions from "@/components/ui/RecentTransactions";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalance from "@/components/ui/TotalBalance";
import {  getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const Home = async ({ searchParams : {id  , page}} : SearchParamProps) => {
  const currentPage = Number(page as string) || 1
  const loggedIn = await getLoggedInUser()
  const accounts = await getAccounts({
    userId: loggedIn?.$id 
  })

  if(!accounts) return;
  const accountData = accounts?.data
  const appwriteItemId = (id as string ) || accountData[0]?.appwriteItemId;

  
  const account = await getAccount({
    appwriteItemId
  })
  
  
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
            accounts={accountData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
        accounts={accountData}
        transactions={account?.transactions}
        appwriteItemId={appwriteItemId}
        page={currentPage}
        />
      </div>
      {/* <RightSideBar user={loggedIn} transactions={account?.transactions} banks={accountData?.slice(0,2)} /> */}
    </section>
  );
};

export default Home;
