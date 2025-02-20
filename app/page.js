'use Client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
    </main>
  );
}
