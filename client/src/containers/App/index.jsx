import React, { Component } from 'react';

import HeaderBar from '@containers/HeaderBar';
import { connect } from 'react-redux';
import {
  Title,
} from './App.styled';


import { makeGetClassification } from './selector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTextInput(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <HeaderBar />
        <Title>Hello App</Title>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getClassification = makeGetClassification();
  const mapStateToProps = (state, props) => {
    return {
      classification: getClassification(state, props),
    };
  };
  return mapStateToProps;
};
const mapStateToProps = makeMapStateToProps();

export default connect(mapStateToProps)(App);
