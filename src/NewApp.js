import About from "./comps/About/About";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header";
import Hero from "./comps/Hero/Hero";
import Intro from "./comps/Intro/Intro";
import Para from "./comps/Parallex/Para";
import TopNav from "./comps/TopNav";
const NewApp = () => {
  return (
    <div>
      {/* header */}
      <TopNav />
      <Header />
      {/* hero */}
      <Hero />
      {/* intro */}
      <Intro />
      {/* parallax */}
      <Para />
      {/* About */}
      <About />
      {/* Footer */}

      <Footer />
    </div>
  );
};

export default NewApp;
