import React from 'react';

function Cardcomponent({cardimagehere,titlehere,rectangle,ellipse,brandhere}) {
  return (
    <div className='forcards'> 
        <div className='forimage'><img src={cardimagehere} className='imagehere' height='120px' alt='cardimagehere'></img></div>

<div className='forproductdetails'>

    <div className='cardtitleandveg'>
      <div className='cardtitle'>{titlehere}</div>
      <div className='vegsymbol'><img src={rectangle} className='rectangle' alt='rectangle'></img><img src={ellipse} className='ellipse' alt='ellipse  '></img></div>
    </div>

    <div className='cardbrand'>{brandhere}</div>

    <div className='forproductsadd'>
      <div className='minusbutton'><button className='minus'>-</button></div>
      <div className='numberofproducts'>1</div>
      <div className='plusbutton'><button className='plus'>+</button></div>
    </div>

</div>

<div className='savefifteen'>Save 15%</div>
  <div className='price'>₹ 558</div>

  <div className='oldmrp'>MRP ₹620
  <hr></hr>
  </div>
    </div>
  )
}

export default Cardcomponent