import { Component, SyntheticEvent } from "react";
import './SignIn.css';

interface State {
  user: string,
  password: string
}

export default class SignIn extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      user: '',
      password: ''
    }
  }

  private updateUser = (event: SyntheticEvent) => {
    this.setState({user: (event.target as HTMLInputElement).value});
  }

  private updatePassword = (event: SyntheticEvent) => {
    this.setState({password: (event.target as HTMLInputElement).value})
  }

  private handleFormSubmit = () => {
    const { user, password } = this.state;
    localStorage.setItem('username', user);
    localStorage.setItem('password', password);
  };

  render() {
    return (
      <div id="signin-container">
        <h1>Sign in</h1>
        <form id="SignIn_form" onSubmit={this.handleFormSubmit}>
          <label>
            <input className="SignIn_input" name="user" value={this.state.user} onChange={this.updateUser} placeholder="Username" />
          </label>
          <label>
            <input className="SignIn_input" type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  };
}