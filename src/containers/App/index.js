import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import theme from './../../commons/Theme';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">hello</div>
      </Provider>
    );
  }
}

export default App;
