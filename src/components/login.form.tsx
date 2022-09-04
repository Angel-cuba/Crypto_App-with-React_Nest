import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<boolean>(false);

  const [password, setPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<boolean>(false);

  const handleSignIn = () => {
    // if (!email || !password) {
    //   return alert('Please fill all the fields');
    // }
    if (password.length < 6) {
      setPasswordError(true);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1>Cryptos</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          className="w-80 text-red-400"
          type="email"
          value={email}
          placeholder="Write your email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          error={emailError}
          helperText={emailError && 'Please enter a valid email address'}
        />
        <TextField
          label="Password"
          className="w-80"
          variant="outlined"
          type="password"
          value={password}
          placeholder="Write your password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          error={passwordError}
          helperText={passwordError && 'Password must be at least 6 characters long'}
        />
        <Link to="/signup" className="justify-self-start self-start mt-2 text-red-500">
          Sign Up
        </Link>
      </div>
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        <span className="p-1">Login</span>
      </Button>
    </div>
  );
};

export default Login;
