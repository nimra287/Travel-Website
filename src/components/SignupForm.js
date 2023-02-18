import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './SignupForm.css'

const SignupForm = () => {
   
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [message, setMessage] = useState('');

    const changeHandler = (e) => {
        // e.preventDefault();
        if(!name || !email || !password || !confirmPassword){
            alert("Please fill out all fields");
        }
        else if(password !== confirmPassword){
            alert("Password don't match");
        }
        else if(!email.includes('@')){
            // alert("Please enter valid email");
            setMessage("Please enter valid email");
        }
        else{
            alert("Signup successfully");
            navigate('/login');
        }
    }

  return (
    <div className='signup-div'>
         <div className='signup-txt'>
            <img className='image-signup' src='images/img-mobile.png' alt="Travel Image"/>
            <h3 className='signup-heading'>Create an account and start exploring a world of opportunities!</h3>
        </div>  
        <form className='signup'>
            <h1>Signup Form</h1><br></br>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" id='labeltext'>Enter Full Name</label>
                <input type="text" value={name} className="form-control" id="exampleInputEmail1" 
                onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Email Address</label>
                <input type="email" name='email' value={email} className="form-control" id="exampleInputEmail1" 
                onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
                <p className='message'>{message}</p>


            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Enter Your Password</label>
                <input type="password" value={password} className="form-control" 
                onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" value={confirmPassword} className="form-control" 
                onChange={(e) => setConfirmPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div className='linklogin'>
                <p>Already have an account?</p>
                <Link to='/login' className='link'>Login</Link>
            </div>
            <button type="submit" className="btn btn-primary" onClick={changeHandler}>Submit</button>
        </form>
    </div>
  )
}

export default SignupForm