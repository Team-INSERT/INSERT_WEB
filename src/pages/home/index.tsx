import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import History from "src/pages/home/layouts/History";
import HomePage from "src/pages/home/layouts/HomePage";

function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <History />
      <Footer />
    </div>
  );
}

export default Home;
