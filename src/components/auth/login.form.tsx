import { Button, TextField } from '@mui/material'
import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 >Cryptos</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Email" className="w-80 text-red-400" type="email" placeholder="Write your email" required/>
        <TextField label="Password" className="w-80" variant="outlined" type="password" placeholder="Write your password" required/>
      </div>
      <Button variant="contained" color="primary">
        <span className="p-1">Login</span>
      </Button>
    </div>
  )
}

export default Login