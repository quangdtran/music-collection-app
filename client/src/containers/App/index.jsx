import React, { Component } from 'react';

import TestButton from '@containers/TestButton';
import HeaderBar from '@containers/HeaderBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Title,
} from './App.styled';


import { makeGetClassification } from './selector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: 0,
      conductMark: 0,
    };
  }

  getTextInput(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Title>Hello App</Title>
        <HeaderBar />
        <span>mark</span>
        <input
          onChange={evt => this.getTextInput(evt)}
          type="text"
          name="mark"
          pattern="[0-9]*"
        />
        <br />
        <br />
        <span>conductMark</span>
        <input
          onChange={evt => this.getTextInput(evt)}
          type="text"
          name="conductMark"
          pattern="[0-9]*"
        />
        <TestButton mark={this.state.mark} conductMark={this.state.conductMark} />
        <h3>Result: {this.props.classification}</h3>
        <Link to="/app2">router test app 2</Link>
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
