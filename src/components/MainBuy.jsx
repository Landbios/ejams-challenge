import checkstep from "../assets/checkstep.svg"
import step3 from '../assets/step3.svg'
import step4 from '../assets/step4.svg'
import product from '../assets/productpreview.jpg'
import thumbnail from '../assets/productThumbnail.png'
import stars from '../assets/Stars.png'
import Tick from '../assets/tick-circle.svg'
import percent from '../assets/percetcircle.svg'
import arrow from '../assets/continue-arrow.svg'
import securelock from '../assets/securelock.svg'
import payments from '../assets/payments.png'
import guarantee from '../assets/guaranteeseal.png'
import buyer from '../assets/buyer.png'
import verified from '../assets/verified.svg'


const MainBuy = () => {
  return (
    <>
    <div className="steps">

        <div className="step">
            <img src={checkstep}></img>
            <p className="step-text">Step 1 : Cart Review</p>
        </div>

        <div className="step">
            <img src={checkstep} ></img>
            <p className="step-text">Step 2 : Checkout</p>
        </div>
        <div className="step">
            <img src={step3}></img>
            <p className="step-text-active">Step 3 : Special Offer</p>
        </div>
        <div className="step">
            <img src={step4}></img>
            <p className="step-text">Step 4 : Confirmation</p>
        </div>
    </div>

    <div className="mobile-steps">

        <div className="mobile-step">
            <img src={checkstep}></img>
            <p className="step-text">Cart Review</p>
        </div>

        <div className="mobile-step">
            <img src={checkstep} ></img>
            <p className="step-text">Checkout</p>
        </div>
        <div className="mobile-step">
            <img src={step3}></img>
            <p className="step-text-active">Special Offer</p>
        </div>
        <div className="mobile-step">
            <img src={step4}></img>
            <p className="step-text">Confirmation</p>
        </div>
        </div>

    <div className="MainBox">
        <div className="ImageAndReviw">
            <div>
                <img src={product} className="prodImg" alt="" />
            </div>
            <div className="buybox">
                <div className="BuyerImgAndRating">
                    <img src={buyer} className="buyprofile" alt="Buyer profile pic" />
                    <div className="RatingAndInfo">
                        <img src={stars}alt="Star Rating" />
                        <div className="NameAndVerified">
                            <p className="BuyerName">Ken T.</p>
                            <img src={verified} alt="Verified Cusomer Badge" />
                            <p className="VerCustomer">Verified Customer</p>
                        </div>
                    </div>

                </div>
                <p className="BuyerText">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>

        </div>
        <div className="OrderInfo">
            <h1 className="OrderTitle"><span className="Highlight">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="Highlight">$14 each</span> ($84.00 total!)</h1>
            <div className="ReviwAndStock">
            <img src={thumbnail} className="Pthumbnail" alt="Product Thumbnail" />
            <div className="PriceAndDetails">
                <div className="subtitleAndPrice">
                    <div className="ProductSubtitle">
                        <p >Clarifion Air Ionizer</p>
                
                    </div>
                    <div className="PriceAndDiscount">
                        <p className="Price">$180</p>
                        <p className="Discount">$84</p>
                    </div>
                
                </div>
                <img className="ReviewStars" src={stars} alt="Review Stars" />
                <div className="stockcont">
                    <label  className="StockRadioStyle">
                        <input type="radio" className="StockRadio" name="StockSelector" id="StockSelector"  checked/>
                        <span className="CheckedRadio"></span>
                    </label>
                    <label className="StockSelectorLabel" htmlFor="StockSelector">12 left in Stock</label>
                </div>
                <p className="ProducDesc">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
            
        </div>
        <p className="MobileDesc">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
        <div className="ProductAttributesCont">
                <div className="ProductAttribute">
                    <img src={Tick} alt="" />
                    <p>Negative Ion Technology may <span>help with allergens</span></p>
                    
                </div>
                <div className="ProductAttribute">
                    <img src={Tick} alt="" />
                    <p>Designed for <span>air rejuvenation</span></p>
                    
                </div>
                <div className="ProductAttribute">
                    <img src={Tick}alt="" />
                    <p><span>Perfect for every room</span> in all types of places.</p>
                    
                </div>
            </div>
            <div className="DiscountBadget">

                <img src={percent} alt="Percent Discount Icon" />
                <p className="badgetText">Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.</p>

            </div>
            <button className="BuyBtn">Yes - Claim my discount <img src={arrow} alt="" /></button>
            <div className="ShippingAndPayment">
                <p>Free shipping</p>
                <p> | </p>
                <div className="securityPay">
                    <img src={securelock} alt="" />
                    <p>Secure 256-bit SSL encryption.</p>
                </div>
                <p  className="hideonmobile"> | </p>
                <div className="styleonmobile"><img src={payments} alt="" /></div>

            </div>
            <div className="CancelCont">
                <a href="#" className="CancelText">No thanks, I don’t want this.</a>
            </div>

            <div className="GuaranteeCont">
                <img src={guarantee} alt="" />
                <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
            </div>
        </div>
     
        
    </div>

    </>
  )
}

export default MainBuy