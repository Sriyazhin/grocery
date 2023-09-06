import './App.css';
import cardimageone from './assets/images/cardimageone.png';
import cardimagetwo from './assets/images/cardimagetwo.png';
import cardimagethree from './assets/images/cardimagethree.png';
import cardimagefour from './assets/images/cardimagefour.png';
import cardimagefive from './assets/images/cardimagefive.png';
import rectangle from './assets/images/Rectangle.png';
import ellipse from './assets/images/Ellipse.png';
import offerpercent from './assets/images/couponpercent.png';
import vector from './assets/images/Vector.png';
import codimage from './assets/images/codavailable.png';
import returnimage from './assets/images/noreturn.png';
import shippingimage from './assets/images/freedelivery.png';
import paymentsimage from './assets/images/securepayment.png';
import contactlessimage from './assets/images/contactlessdelivery.png';

import Cardcomponent from './assets/components/Cardcomponent';
import Offercomponent from './assets/components/Offercomponent';
import Servicecomponent from './assets/components/Servicecomponent';
import { useState } from 'react';

function App() {
  const carddetailshere = [{imagename:cardimageone,title:'Pedigree Chicken & Vegetables Adult Dry Dog Food 3 Kg',brand:'Brand : Pedigree'},
  {imagename:cardimagetwo,title:'Pedigree Chicken & Vegetables Adult Dry Dog Food 10 Kg',brand:'Brand : Pedigree'},
  {imagename:cardimagethree,title:'PURINA SUPERCOAT Puppy Dry Dog Food with Chicken 3 Kg',brand:'Brand : Purina'},
  {imagename:cardimagefour,title:'Royal Canin Mini Starter New Born & Lactating Mother Dry Dog Food 1Kg',brand:'Brand : Royal Canin'},
  {imagename:cardimagefive,title:'Drools Chicken & Egg Adult Dry Dog Food 3Kg',brand:'Brand : Drools'}];

  const offerdetailshere = [{codehere:'SANCHU200',offerpercentage:'Get 50% Off',valuehere:'optionone'},
  {codehere:'SANCHU100',offerpercentage:'Get 20% Off',valuehere:'optiontwo'}];

  const servicedetailshere = [{serviceimage:codimage,servicetitle:'COD AVAILABLE'},
  {serviceimage:returnimage,servicetitle:'NO EXCHANGE & RETURNS'},{serviceimage:shippingimage,servicetitle:'FREE SHIPPING'},
  {serviceimage:paymentsimage,servicetitle:'SECURE PAYMENTS'},{serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'},
  {serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'}]

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleOfferChange = (event) => {
    const selectedOfferValue = event.target.value;
    let discount = 0;

    if (selectedOfferValue === 'offer1') {
      discount = 100;
    } else if (selectedOfferValue === 'offer2') {
      discount = 200;
    }

    setSelectedOffer(selectedOfferValue);
    setDiscountAmount(discount);
  };
  
  return (

  <div className='wholepart'>
      <div className='myshoppingcart'>MY SHOPPING CART</div>
          <div className='cardsandcalculation'>
            <div className='cardshere'>
            {carddetailshere.map(({imagename,title,brand},i) => {
              return(
                <Cardcomponent key={i} cardimagehere={imagename} titlehere={title} brandhere={brand} rectangle={rectangle} ellipse={ellipse} />
              );
            })
            }
              </div>      
          
          <div className='forcalculation'>

            <div className='forapplycoupon'>
            <div className='offerpercent'><img src={offerpercent} height='20px'></img></div>
            <div className='applycoupon'>Apply Coupons Code</div>
            <div className='vectorsymbol'><img src={vector}></img></div>
            </div>

            <div>
              {offerdetailshere.map(({codehere,offerpercentage,valuehere},i) => {
                return(
                <Offercomponent key={i} id={valuehere} codehere={codehere} offerpercentage={offerpercentage} selected={selectedOffer} value={valuehere} handleOfferChange={this.handleOfferChange} />
                );
              })
              }
              
              </div>

            <div className='summaryandlistbox'>
              <div className='ordersummary'>ORDER SUMMARY</div>
              
              <div className='calculationlist'>
                <ul>
                  <li>MRP value</li>
                  <li>Discount Price</li>
                  <li>Promo Code Discount</li>
                  <li>Shipping Fee</li>
                  <li>Sub- Total</li>
                  <li>GST (12%)</li>
                  <li id='ordertotal'>Order Total</li>
                </ul>
                
                <ul>
                  <li>333</li>
                  <li>333</li>
                  <li>{discountAmount}</li>
                  <li>333</li>
                  <li>333</li>
                  <li>333</li>
                  <li id='ordertotal'>333</li>
                </ul>
              </div>
            </div>
            <div className='checkout'>PROCEED TO CHECKOUT</div>
          </div>

        </div>
        
        <div className='services'>
          {servicedetailshere.map(({serviceimage,servicetitle},i) => {
            return(
              <Servicecomponent serviceimage={serviceimage} servicetitle={servicetitle} />
            );
          }
          
          )}
          
        </div>
        
  </div>
  );
}

export default App;
