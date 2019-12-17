import React from 'react'
import './form-input-styles.scss'

const FormInput = ({handlechange,lable,...otherprops}) =>(


<div className='group'>

<input className='form-input' onChange={handlechange}{...otherprops}/>
{lable ? (<label className={`${otherprops.value.lenght ? 'shrink':''}form-input-label`}>


{lable}


</label>):null}
</div>




)
export default FormInput;