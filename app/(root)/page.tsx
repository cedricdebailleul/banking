import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Adrian",
    lastName: "JSM",
    email: "contact@jsmastery.pro",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome to Horizon"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default Home;
