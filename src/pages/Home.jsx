import React from "react";
import Navbar from "../Components/Global/Navbar";
import Hero from "../Components/Home/Hero";
import FeaturedProducts from "../Components/Home/FeaturedProducts";

import Footer from "../Components/Global/Footer";
import SampleProduct from "../Components/Products/SampleProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
