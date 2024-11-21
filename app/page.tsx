import About from "#/components/page-components/About";
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
    </>
  )
}
