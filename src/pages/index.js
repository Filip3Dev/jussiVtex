import * as React from "react"
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Stores from "../components/Stores";
import Solutions from "../components/Solutions";
import Whowe from "../components/Whowe";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <Layout className="homeJucci">
      <Hero></Hero>
      <Stores></Stores>
      <Solutions></Solutions>
      <Whowe></Whowe>
      <Contact></Contact>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
