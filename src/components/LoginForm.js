import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const changeHandler = (e) => {
        // e.preventDefault();
        if(!email || !password){
            alert("Please fill out all fields");
        }
        else if(!email.includes('@')){
            // alert("Please enter valid email");
            setMessage("Please enter valid email");
        }
        else{
            setEmail('');
            setPassword('');
            alert("Login successfully");
            localStorage.setItem("loginUser", true);
            // sessionStorage.setItem("loginUser", true);
            navigate('/services');
        }
    }

  return (
    <div className='login-div'>
        <div className='login-txt'>
            <h1>Welcome!</h1>
            <h2>Don't listen to what they say.</h2>
            <h3>Go See!</h3>
        </div>  
        <form className='login'>
            <h1>Login Form</h1><br></br>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                <input type="email" name='email' value={email} class="form-control" id="exampleInputEmail1" 
                onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
                 <p className='message'>{message}</p>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={password} class="form-control" 
                onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <div className='linklogin'>
                <p>Don't have an account?</p>
                <Link to='/sign-up' className='link'>Signup</Link>
            </div>
            <button type="submit" class="btn btn-primary" onClick={changeHandler}>Login</button>
        </form>
    </div>
  )
}

export default Login