import React from 'react';

import Collectionitems from '../collection-items/colection-items.c'
import './preview.style.scss';

const Collectionpreview = ({title,items}) => (

<div className="collection-preview">

    <h1 className="title">{title.toUpperCase()}</h1>
<div className="preview">

{items.filter((item,idx)=>idx < 4).map(({id,...otheritemprop})=>(<Collectionitems key={id} {...otheritemprop}/>))}
 </div>
</div>

)
export default Collectionpreview;