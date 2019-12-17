import React from 'react';
import {Switch , Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/hompage.c'
import Shoppage from './pages/shop/shop.c'
import Header from './components/header/header.c';
import SignInandSignUp from '../../hyperxs-clothing/src/pages/signin-sign-up-page/signin-signup.c'
import {auth} from './firebase/firrebase-utils'





class App extends React.Component 
{
constructor(){
    super();
    this.state={
        currentuser:'null'
    }
}
unsubscribeFromauth =null;
componentDidMount() {
    this.unsubscribeFromauth =auth.onAuthStateChanged(user => {
        this.setState({currentuser:user
        
        });
        console.log(this.state.currentuser)
    })
}

componentWillUnmount() {
      this.unsubscribeFromauth();   
}

render() {return <div className="homepage">
 <Header currentuser={this.state.currentuser} />
 <Switch>
<Route exact path='/' component={Homepage}/>
<Route path='/shop' component={Shoppage}/>
<Route path='/signin' component={SignInandSignUp}/>
</Switch>
 </div>
}
}

export default App;
