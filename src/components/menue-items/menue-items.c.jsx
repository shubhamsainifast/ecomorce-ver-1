import React from 'react';
import './menue-items.style.scss'
const Menueitems = ({title, imageurl,size}) =>
(

   
<div  className={`${size} menue-items `}>
<div className="backgroundimage"

style={{backgroundImage:`url(${imageurl})`} }

    
/>
<div className="content">

    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">shop now</span>
</div>

</div>


)
export default Menueitems;