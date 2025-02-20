'use Client'
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
