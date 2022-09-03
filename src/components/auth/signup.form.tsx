import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup: React.FC = () => {
  return (
     <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 >Cryptos</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Name" className="w-80 text-red-400" type="text" placeholder="Write your name" required/>
        <TextField label="Last Name" className="w-80" type="lastname" placeholder="Write your last name" required/>
        <TextField label="Email" className="w-80 text-red-400" type="email" placeholder="Write your email" required/>
        <TextField label="Password" className="w-80" variant="outlined" type="password" placeholder="Write your password" required/>
        <TextField label="RepeatPassword" className="w-80" variant="outlined" type="password" placeholder="Repeat your password" required/>
        <Link to="/" className="justify-self-start self-start mt-2 text-red-500">
            Sign In
        </Link>
      </div>
      <Button variant="contained" color="warning">
        <span className="p-1">Sign Up</span>
      </Button>
    </div>
  )
}

export default Signup