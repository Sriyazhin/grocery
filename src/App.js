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
const [carddetailshere,setCarddetailshere] = useState([{imagename:cardimageone,count:1,productprice:558,oldmrp:658,title:'Pedigree Chicken & Vegetables Adult Dry Dog Food 3 Kg',brand:'Brand : Pedigree'},
  {imagename:cardimagetwo,productprice:600,count:1,oldmrp:700,title:'Pedigree Chicken & Vegetables Adult Dry Dog Food 10 Kg',brand:'Brand : Pedigree'},
  {imagename:cardimagethree,productprice:800,count:1,oldmrp:900,title:'PURINA SUPERCOAT Puppy Dry Dog Food with Chicken 3 Kg',brand:'Brand : Purina'},
  {imagename:cardimagefour,productprice:300,count:1,oldmrp:400,title:'Royal Canin Mini Starter New Born & Lactating Mother Dry Dog Food 1Kg',brand:'Brand : Royal Canin'},
  {imagename:cardimagefive,productprice:900,count:1,oldmrp:950,title:'Drools Chicken & Egg Adult Dry Dog Food 3Kg',brand:'Brand : Drools'}]);

  const offerdetailshere = [{codehere:'SANCHU200',offerpercentage:'Get 50% Off',valuehere:200},
  {codehere:'SANCHU100',offerpercentage:'Get 20% Off',valuehere:100}];

  const servicedetailshere = [{serviceimage:codimage,servicetitle:'COD AVAILABLE'},
  {serviceimage:returnimage,servicetitle:'NO EXCHANGE & RETURNS'},{serviceimage:shippingimage,servicetitle:'FREE SHIPPING'},
  {serviceimage:paymentsimage,servicetitle:'SECURE PAYMENTS'},{serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'},
  {serviceimage:contactlessimage,servicetitle:'CONTACT-LESS DELIVERY'}]

  const shipfee=10;
  const gstfee=10;

const [discount,setDiscount] = useState(0);

const handleAddClick = (index) => {
const updateproduct = [...carddetailshere];
updateproduct[index].count=updateproduct[index].count + 1;
setCarddetailshere(updateproduct);
};

const handleminusClick = (index) => {
  const updateproduct = [...carddetailshere];
  if(updateproduct[index].count>1){
    updateproduct[index].count=updateproduct[index].count - 1;
setCarddetailshere(updateproduct);
  }
};

const mrpvalue = (carddetailshere)=>{
  let mrp=carddetailshere.reduce((total,priceofproduct)=>total+(priceofproduct.oldmrp*priceofproduct.count),0);
// for(let i=0;i<carddetailshere.length;i++){
// mrp=mrp+ carddetailshere[i].productprice;
// }
return mrp;
};

 const discountvalue = (carddetailshere)=>{
  let sellingprice=carddetailshere.reduce((total,priceofproduct)=>total+(priceofproduct.productprice*priceofproduct.count),0);
  let reducedprice = mrpvalue(carddetailshere)-sellingprice;
  return reducedprice;
 };

 const handleChange = e => {
  const target = e.target.value;
  console.log(target,'target');
  setDiscount(target);
};
 
 const subtot=(carddetailshere)=>{
  let subtotal=mrpvalue(carddetailshere)-discountvalue(carddetailshere)-discount+shipfee;
  return subtotal;
 };

 const ordertotal=(carddetailshere)=>{
  let ordertot=subtot(carddetailshere)+gstfee;
  return ordertot;
 };

  return (

  <div className='wholepart'>
      <div className='myshoppingcart'>MY SHOPPING CART</div>
          <div className='cardsandcalculation'>
            <div className='cardshere'>
            {carddetailshere.map(({imagename,count,productprice,title,brand,oldmrp},i) => {
              return(
                <Cardcomponent key={i} count={count} handleAddClick={()=>handleAddClick(i)} handleminusClick={()=>handleminusClick(i)} productprice={productprice}  oldmrp={oldmrp} cardimagehere={imagename} titlehere={title} brandhere={brand} rectangle={rectangle} ellipse={ellipse} />
              );
            })
            }
              </div>      
          
          <div className='forcalculation'>

            <div className='forapplycoupon'>
            <div className='offerpercent'><img src={offerpercent} height='20px' alt='offerpercent'></img></div>
            <div className='applycoupon'>Apply Coupons Code</div>
            <div className='vectorsymbol'><img src={vector} alt='vector'></img></div>
            </div>

            <div>
              {offerdetailshere.map(({codehere,offerpercentage,valuehere},i) => {
                return(
                <Offercomponent key={i} codehere={codehere} offerpercentage={offerpercentage} value={valuehere} handleOfferChange={handleChange} />
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
                  <li>Cart value</li>
                  <li>Promo Code Discount</li>
                  <li>Shipping Fee</li>
                  <li>Sub- Total</li>
                  <li>GST (12%)</li>
                  <li id='ordertotal'>Order Total</li>
                </ul>
                
                <ul>
                  <li> ₹{mrpvalue(carddetailshere)}</li>
                  <li id='dis'>-₹{discountvalue(carddetailshere)}</li>
                  <li> ₹{mrpvalue(carddetailshere)-discountvalue(carddetailshere)}</li>
                  <li id='dis'>-₹{discount}</li>
                  <li>₹{shipfee}</li>
                  <li>₹{subtot(carddetailshere)}</li>
                  <li>₹{gstfee}</li>
                  <li id='ordertotal'>₹{ordertotal(carddetailshere)}</li>
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
