import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
