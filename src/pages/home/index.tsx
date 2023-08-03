import Header from "components/Header";
import Footer from "components/Footer";
import History from "pages/home/layouts/History";
import HomePage from "pages/home/layouts/HomePage";
import Service from "pages/service";
import TimeLine from "pages/home/layouts/TimeLine";
import Member from "./layouts/Member";

function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <History />
      <Service />
      <TimeLine />
      <Member />
      <Footer />
    </div>
  );
}

export default Home;
