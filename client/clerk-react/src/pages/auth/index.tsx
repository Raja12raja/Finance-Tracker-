import React from 'react';
import {SignedIn,SignInButton,SignOutButton,SignedOut,UserButton} from '@clerk/clerk-react'
import { Navigate } from "react-router-dom";
const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal"/>
        <SignOutButton  mode="modal"/>
      </SignedOut>
      <SignedIn>
        <Navigate to='/'/>
      </SignedIn>
    </div>
  )
}

export default Auth
