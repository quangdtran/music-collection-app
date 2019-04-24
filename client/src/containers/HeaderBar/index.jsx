import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={1}>avatar</Grid>
          <Grid item xs={4}>avatar</Grid>
          <Grid item xs={1}>last element</Grid>
        </Grid>
      </div>
    );
  }
}
