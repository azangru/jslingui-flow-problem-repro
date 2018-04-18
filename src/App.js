// @flow

import React, { Component } from 'react';
import type { withI18nProps } from '@lingui/react';


import logo from './logo.svg';
import './App.css';

type Props = {|
  foo: string
|} & withI18nProps;

class App extends Component<Props> {
  render() {
    console.log('foo:', this.props.foo);
    console.log('forbidden prop', this.props.x)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
