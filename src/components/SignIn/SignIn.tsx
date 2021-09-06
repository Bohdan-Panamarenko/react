import { useState, SyntheticEvent } from 'react';
import './SignIn.css';

export default function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const updateUser = (event: SyntheticEvent) => {
    setUser((event.target as HTMLInputElement).value);
  }

  const updatePassword = (event: SyntheticEvent) => {
    setPassword((event.target as HTMLInputElement).value)
  }

  const handleFormSubmit = () => {
    localStorage.setItem('username', user);
    localStorage.setItem('password', password);
  };

  return (
    <div id="signin-container">
      <h1>Sign in</h1>
      <form id="SignIn_form" onSubmit={handleFormSubmit}>
        <label>
          <input className="SignIn_input" name="user" value={user} onChange={updateUser} placeholder="Username" />
        </label>
        <label>
          <input className="SignIn_input" type="password" value={password} onChange={updatePassword} placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}