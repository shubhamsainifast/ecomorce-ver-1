import React from 'react';
import './cusdtome.btn.style.scss';


const CustomeButton =({children,isGoogleSignIn,...otherprops})=>(

<button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherprops}>{children}</button>



)


export default CustomeButton;