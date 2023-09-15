import styled from "styled-components";
import color from "styles/color";
import Header from "components/Header";
import Footer from "components/Footer";
import History from "pages/layouts/History";
import HomePage from "pages/layouts/HomePage";
import Member from "pages/layouts/Member";
import Service from "pages/layouts/Service";

function Home() {
  return (
    <Layout>
      <Header />
      <HomePage />
      <History />
      <Service />
      <Member />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  background-color: ${color.white};
`;

export default Home;
