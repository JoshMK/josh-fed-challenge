//React core
import React from "react";
//custom components
import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  return (
    <>
      <Header />
      <HeroImage />
      <ReviewSlider />
      <ProductGrid />
    </>
  );
}

export default App;
