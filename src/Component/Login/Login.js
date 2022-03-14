import React from 'react'
import { useSelector } from 'react-redux';
import Deshboard from '../Deshboard/Deshboard';

import Navbar from '../Navbar'
import LoginBanner from './LoginBanner'


function Login() {

    const user = 'abg';
    console.log(user);


    return (
        <>

        {
            !user ? <div><Navbar/><LoginBanner/></div>:<Deshboard/>
        }

    </>
    )
}

export default Login
