 import React from 'react';
 import './headre.style.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/logo.svg'
import { auth } from '../../firebase/firrebase-utils';
 

const Header = ({currentuser}) => 

( <div className='header'> 


<Link className='logo-container' to='/'>
<Logo className='logo'/>
</Link>
<div className='options'>
<Link className='option' to='/shop'>shop</Link>
<Link className='option' to='/shop'>contact</Link>
<Link className='option' to='/shop'>shop</Link>
{currentuser ? (

<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>


):(<Link className='option' to='/signin'>SIGN IN</Link>


)}

</div>
</div>
)

export default Header;


 