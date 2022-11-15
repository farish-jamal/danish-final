import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <button className='btn btn-sm btn-danger mx-3' onClick={()=> auth.signOut()}>Log Out</button>
    )
}

export default SignOut