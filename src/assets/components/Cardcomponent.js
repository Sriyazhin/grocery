import React from 'react';

function Cardcomponent({cardimagehere,titlehere,rectangle,ellipse,brandhere,count,handleAddClick,handleminusClick,productprice,oldmrp}) {
  
  return (
    <div className='forcards'> 
        <div className='forimage'><img src={cardimagehere} className='imagehere' height='120px' alt='cardimagehere'></img></div>

<div className='forproductdetails'>

    <div className='cardtitleandveg'>
      <div className='cardtitle'>{titlehere}</div>
      <div className='vegsymbol'><img src={rectangle} className='rectangle' alt='rectangle'></img><img src={ellipse} className='ellipse' alt='ellipse  '></img></div>
    </div>

    <div className='cardbrand'>{brandhere}</div>

    <div>
      <form className='forproductsadd'>
        <input type='button' name='addsub' className='minusbutton minus' value='-' onClick={handleminusClick} />
        <label for='addsub' className='numberofproducts'>{count}</label>
        <input type='button' name='addsub' className='plusbutton plus' value='+' onClick={handleAddClick} />
      </form>
      
    </div>

</div>

<div className='savefifteen'>Save 15%</div>
  <div className='price'>₹{productprice}</div>

  <div className='oldmrp'>MRP ₹{oldmrp}
  <hr></hr>
  </div>
    </div>
  )
}

export default Cardcomponent
