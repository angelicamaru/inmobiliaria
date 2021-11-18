import React from 'react'
export default function Logout() {

    const handleSubmit=e=>{
        e.preventDefault()
        localStorage.removeItem('id');
        window.location.replace('/')
    }
    return (
        <div>
            <h1>Do you want to close the current session?</h1>
            <button className='btn btn-danger' onClick={handleSubmit}>Log out</button>
        </div>
    )
}
