import About from "#/components/page-components/About";
import Contact from "#/components/page-components/Contact";
import { Footer } from "#/components/page-components/Footer";
import Header from "#/components/page-components/Header";
import Navbar from "#/components/page-components/Navbar";
import Products from "#/components/page-components/Products";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
