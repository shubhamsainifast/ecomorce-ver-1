import React from 'react';
import './collecion-items.style.scss';


const Collectionitems =({id,name,price,imageUrl})=>
<div className='collection-item'>

<div className='image ' style={{backgroundImage:`url(${imageUrl})`}}/>

<div className='collection-footer'>


<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>

</div>



export default Collectionitems;