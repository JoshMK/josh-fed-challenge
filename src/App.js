//React core
import React from "react";
//custom components
import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import BlogGrid from "./components/BlogGrid/BlogGrid";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <ReviewSlider />
      <ProductGrid />
      <BlogGrid />
    </>
  );
}

export default App;
