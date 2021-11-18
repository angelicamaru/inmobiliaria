import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

export default function Login() {
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const [email,pass]=e.target.elements;
        const res=await axios.get('http://localhost:3001/users'+'?email='+email.value+'&pass='+pass.value);
        if(res.data.length>0){
            localStorage.setItem('id',email.value);
            window.location.replace('/')
        }else{
            window.alert('Email or passwords incorrect, try again')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="email" className="form-control" name ="email" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <input type="password"  name ="pass" className="form-control" id="pass"/>
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    )
}
