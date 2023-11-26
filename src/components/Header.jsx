import truck from "../assets/ph_truck-light.svg"
import heart from "../assets/mdi_cards-heart-outline.svg"
import check from "../assets/check.svg"
import arrows from "../assets/arrow.svg"
import logo from "../assets/clarifon.png"
import mcafe from "../assets/McAfee.png"
import norton from "../assets/norton.png"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="headnav">
                <img alt="headicon-svg" src={check} className="headicon"></img>
                <p className="headtext">30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={truck} className="headicon"></img>
                <p className="headtext">Free delivery on orders over $40.00</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={heart} className="headicon"></img>
                <p className="headtext">50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={arrows} className="headicon"></img>
                <p className="headtext">100% Money Back Guarantee</p>
            </div>
        </div>

        <div className="mobile-Slider">
        <Carousel responsive={responsive} infinite={true}  showDots={false} >
            <div className="headnav">
                <img alt="headicon-svg" src={check} className="headicon"></img>
                <p className="headtext">30-DAY SATISFACTION GUARANTEE</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={truck} className="headicon"></img>
                <p className="headtext">Free delivery on orders over $40.00</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={heart} className="headicon"></img>
                <p className="headtext">50.000+ HAPPY CUSTOMERS</p>
            </div>
            <div className="headnav">
                <img alt="headicon-svg" src={arrows} className="headicon"></img>
                <p className="headtext">100% Money Back Guarantee</p>
            </div>
        </Carousel>
        </div>
        <div className="company-brands">
            <img src={logo} alt="Clarifon Logo" />
            <div className="allybrands">
                <img src={mcafe} className="mcafeeImg" alt="McAfee Secure" />
                <img src={norton} className="nortnImg" alt="Norton Secure logo" />
            </div>
        </div>
    </>
  )
}

export default Header