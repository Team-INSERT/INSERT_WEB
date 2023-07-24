import Header from "components/Header";
import Footer from "components/Footer";
import History from "pages/home/layouts/History";
import HomePage from "pages/home/layouts/HomePage";
import TimeLine from "pages/home/layouts/TimeLine";

function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <History />
      <TimeLine />
      <Footer />
    </div>
  );
}

export default Home;
