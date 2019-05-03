import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
} from '@material-ui/core';

import HeaderBar from '@containers/HeaderBar';
import MusicRoomSideBar from '@containers/MusicRoomSideBar';
import MusicPlayBox from '@containers/MusicPlayBox';

import {
  Title,
  WrapApp,
  GridAppBody,
  GridMusicRoomSideBar,
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
      <WrapApp>
        <header>
          <HeaderBar />
        </header>
        <GridAppBody container>
          <GridMusicRoomSideBar item xs={3}>
            <MusicRoomSideBar />
          </GridMusicRoomSideBar>
          <Grid item xs={9}>
            <MusicPlayBox />
          </Grid>
        </GridAppBody>
      </WrapApp>
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
