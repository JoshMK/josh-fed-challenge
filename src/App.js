//React core
import React, { Component } from "react";
//custom components
import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";
import BlogGrid from "./components/BlogGrid/BlogGrid";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/Footer/Footer";
//SCSS
import "./app.scss";

class App extends Component {
  state = {
    lang: "english",
    mobileMenuToggled: false,
    isMobile: true,
  };
  //changeAppLanguage - change application's language based on Language Picker's selection
  changeAppLanguage = (e) => {
    this.setState({ lang: e.target.value });
  };
  checkIsMobile = () => {
    window.innerWidth > 768
      ? this.setState({ isMobile: false })
      : this.setState({ isMobile: true });
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      mobileMenuToggled: !prevState.mobileMenuToggled,
    }));
  };

  componentDidMount() {
    //mount all events
    window.addEventListener("resize", this.checkIsMobile);
    this.checkIsMobile();
  }

  componentWillUnmount() {
    //unmount all events
    window.removeEventListener("resize", this.checkIsMobile);
  }
  render() {
    return (
      <>
        <Header lang={this.state.lang} />
        <HeroImage lang={this.state.lang} />
        <ReviewSlider lang={this.state.lang} />
        <BlogGrid lang={this.state.lang} />
        <ProductGrid lang={this.state.lang} />
        <Footer
          lang={this.state.lang}
          changeAppLanguage={this.changeAppLanguage}
        />
      </>
    );
  }
}

export default App;
