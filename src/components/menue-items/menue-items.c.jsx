import React from 'react';
import {withRouter} from 'react-router-dom'
import './menue-items.style.scss'
const Menueitems = ({title, imageurl,size,history,linkurl,match}) =>
(

   
<div  className={`${size} menue-items `} onClick={()=>history.push(`${match.url}${linkurl}`)}>
<div className="backgroundimage"

style={{backgroundImage:`url(${imageurl})`} }

    
/>
<div className="content">

    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">shop now</span>
</div>

</div>


)
export default withRouter(Menueitems);