import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserMutation } from '../api/users.api';

const Signup: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [lastname, setLastname] = React.useState<string>();

  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<boolean>(false);

  const [password, setPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<boolean>(false);

  const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('');
  const [passwordConfirmationError, setPasswordConfirmationError] = React.useState<boolean>(false);

const [createUser] = useCreateUserMutation()
  const body: any ={
    firstName: name,
    lastName: lastname,
    email: email,
    password: password,
  }

  //Handler
  const handleSignup = async() => {
    if (!name || !lastname || !email || !password || !passwordConfirmation) {
      return alert('Please fill all the fields');
    }
    if (password.length < 6) {
      setPasswordError(true);
    }
    if (password !== passwordConfirmation) {
      setPasswordConfirmationError(true);
      return;
    }
    await createUser(body)
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1>Cryptos</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Name"
          className="w-80 text-red-400"
          type="text"
          value={name}
          placeholder="Write your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Last Name"
          className="w-80"
          type="text"
          value={lastname}
          placeholder="Write your last name"
          required
          onChange={(e) => setLastname(e.target.value)}
        />
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
        <TextField
          label="RepeatPassword"
          className="w-80"
          variant="outlined"
          type="password"
          value={passwordConfirmation}
          placeholder="Repeat your password"
          required
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
            setPasswordConfirmationError(false);
          }}
          error={passwordConfirmationError}
          helperText={passwordConfirmationError && 'Passwords do not match'}
        />
        <Link to="/" className="justify-self-start self-start mt-2 text-red-500">
          Sign In
        </Link>
      </div>
      <Button variant="contained" color="warning" onClick={handleSignup}>
        <span className="p-1">Sign Up</span>
      </Button>
    </div>
  );
};

export default Signup;
