import Header from "components/Header";
import Footer from "components/Footer";
import History from "pages/layouts/History";
import HomePage from "pages/layouts/HomePage";
import Member from "pages/layouts/Member";
import Service from "pages/layouts/Service";

function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <History />
      <Service />
      <Member />
      <Footer />
    </>
  );
}

export default Home;
