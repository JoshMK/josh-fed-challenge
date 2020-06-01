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
    headerScroll: true,
    productsAnimate: false,
  };

  detectHeaderScroll = () => {
    const HEROHEIGHT = this.state.isMobile ? 360 : 800; //hero image height
    const PRODUCTSHEIGHT = this.state.isMobile ? 2800 : 1240; //products grid height
    //fixed header animation
    window.pageYOffset > HEROHEIGHT
      ? this.setState({ headerScroll: false })
      : this.setState({ headerScroll: true });
    //animate products section
    window.pageYOffset > PRODUCTSHEIGHT
      ? this.setState({ productsAnimate: true })
      : this.setState({ productsAnimate: false });
  };

  //changeAppLanguage - change application's language based on Language Picker's selection
  changeAppLanguage = (e) => {
    this.setState({ lang: e.target.value });
  };

  //checkIsMobile - detect mobile transition
  checkIsMobile = () => {
    window.innerWidth > 768
      ? this.setState({ isMobile: false, mobileMenuToggled: false })
      : this.setState({ isMobile: true });
  };

  //toggleMobileMenu - reveal submenu on mobile
  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      mobileMenuToggled: !prevState.mobileMenuToggled,
    }));
  };

  componentDidMount() {
    //mount all events
    window.addEventListener("resize", this.checkIsMobile, false);
    window.addEventListener("scroll", this.detectHeaderScroll, false);
    this.checkIsMobile();
  }

  componentWillUnmount() {
    //unmount all events
    window.removeEventListener("resize", this.checkIsMobile);
    window.removeEventListener("scroll", this.detectHeaderScroll);
  }
  render() {
    return (
      <>
        <Header {...this.state} toggleMobileMenu={this.toggleMobileMenu} />
        <HeroImage lang={this.state.lang} heroImage={"gmapsinworkout"} />
        <ReviewSlider lang={this.state.lang} />
        <BlogGrid lang={this.state.lang} />
        <ProductGrid
          lang={this.state.lang}
          productsAnimate={this.state.productsAnimate}
        />
        <Footer
          lang={this.state.lang}
          changeAppLanguage={this.changeAppLanguage}
        />
      </>
    );
  }
}

export default App;
