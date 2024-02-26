import React from 'react'
import { useState } from 'react'
function Form() {
  const[email,setEmail]=useState("");
  const[emailValid,setEmailValid]=useState(false);

  const[password,setPassword]=useState("");
  const[validpassword,setPasswordValid]=useState(false);

  const[confirm,setConfirm]=useState("");
  const[validconfirm,setConfirmValid]=useState(false);


  let handleEmail=(emailvalue)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid=regex.test(emailvalue);
    setEmailValid(isValid);
    return true;
  }

  const handlePassword=(passvalue)=>{
      if(passvalue>=8){
        setPasswordValid(true);
        return true;
      }else{
        setPasswordValid(false);
        return false;
      }
  }

  const handleConfirmPass=(confirmPass)=>{
   if(confirmPass==password){
    setConfirmValid(true)
    return true;
   }else{
    return false;
   }
  }
  function handleSubmit(event){
    event.preventDefault();
    if(handleEmail && handlePassword && handleConfirmPass){
      alert("form submitted successfully")
    }else{
      alert("can’t submit the form.")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
           <label htmlFor='email'>Email</label>
           <input type='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value);handleEmail(e.target.value)}} style={{ border: emailValid ? '2px solid green' : '1px solid red' }}/>
           {!emailValid && <p>invalid email format</p>}
        </div>
       
        <div>
           <label htmlFor='pass'>Password</label>
           <input type='password' id='pass' value={password} onChange={(e)=>{setPassword(e.target.value);handlePassword(e.target.value)}} style={{ border: validpassword ? '2px solid green' : '1px solid red' }}/>
           {!validpassword && <p>Password must be at least 8 character</p>}
        </div>
        <div>
           <label htmlFor='confirm'>confirm Password</label>
           <input type='password' id='confirm' value={confirm} onChange={(e)=>{
            setConfirm(e.target.value);
            handleConfirmPass(e.target.value);
           }} style={{ border: validpassword ? '2px solid green' : '1px solid red' }}/>
            {!validconfirm && <p>Password do not match</p>}
        </div>
        <div>
          <input type='submit' value='submit' id='submit'/>
        </div>
      </form>
    </>
  )
}

export default Form
