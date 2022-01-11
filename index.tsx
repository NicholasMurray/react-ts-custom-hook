import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './users/Users';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
