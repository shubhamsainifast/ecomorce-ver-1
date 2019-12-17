import React from 'react';
import FormInput from '../form-input-component/form-input.c'
import CustomeButton from '../custome-btn.c.jsx/customebtn.c'
import './signin.style.scss'
import {signInWithGoogle} from '../../firebase/firrebase-utils'
class SignIn extends React.Component{

constructor(props){

super(props)

this.state = {

email:'',
password:''

}
}


Handlesubmit= event =>
{
event.preventDefault();
this.setState({email:'',password:''})
}
Handlechange = event => {

const {value,name} = event.target;
this.setState({[name]:value})



}


render(){
    return(


<div className='signIn'>

<h2 className='title'>i already have an account</h2>
<span> sign in with your email and password</span>
<form onSubmit={this.Handlesubmit}>
<FormInput name='email' type='email' lable='email' value={this.state.email} handlechange={this.Handlechange} required/>

<FormInput

name='password'
type='password'
handlechange={this.Handlechange}
value={this.state.password}
lable='password'
required



/>
<div className='btn'>
<CustomeButton type='submit'>SIGN IN</CustomeButton>
<CustomeButton onClick={signInWithGoogle} isGoogleSignIn>{''}SIGN IN WITH GOOGLE{''}</CustomeButton>
</div>
</form>
</div>


    )
}


}
export default SignIn;