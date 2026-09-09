import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Journey from "./components/Journey";
import Roles from "./components/Roles";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Recognition from "./components/Recognition";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

// Panels alternate cream / navy all the way down so no two dark
// sections ever sit next to each other.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Journey />
        <Roles />
        <Expertise />
        <Experience />
        <Gallery />
        <Recognition />
        <Testimonials />
        <Vision />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
