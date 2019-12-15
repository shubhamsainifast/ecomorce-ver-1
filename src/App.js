import React from 'react';
import {Switch , Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/hompage.c'
import Shoppage from './pages/shop/shop.c'







function App() {
 return <div className="homepage">
 <Switch>
<Route exact path='/' component={Homepage}/>
<Route path='/shop' component={Shoppage}/>
</Switch>
 </div>
}

export default App;
