import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.page.styles.scss'
import  Collectionpreview from '../../components/previewcollection.coponent/preview.collection.c'

class ShopPage extends React.Component{

constructor(props){

super(props)

this.state ={

    collections:SHOP_DATA
}

}

render(){
    const {collections}=this.state;
    return(

<div className="shop-page">
{

collections.map(({id, ...othercollectionprops}) => (

< Collectionpreview  key={id} {...othercollectionprops}/>

))}


</div>
        
    )
}
}
export default ShopPage;