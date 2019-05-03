import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  Grid,
  Avatar,
} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import theme from '@src/root/theme';

import {
  WrapMusicRoomSelection,
  GridAvatar,
  GridOption,
  MoreInfo,
} from './MusicRoomSelection.styled';

import {
  selectMusicRoom,
} from './action';

class MusicRoomSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  // lifecycle: check key
  componentWillReceiveProps(nextProps, oldProps) {
    if (nextProps.idIsSelected === this.props.id) this.setState({ isSelected: true });
    else if (this.state.isSelected) this.setState({ isSelected: false });
  }

  // method: convert list member to string
  getListMemberAsString() {
    return this.props.members.reduce((name, result) =>
      (result === '' ? result + name : `${result}, ${name}`), '');
  }

  // method: selectMusicRoom
  selectMusicRoom() {
    // this.props.key
  }

  render() {
    const { isSelected } = this.state;
    return (
      <WrapMusicRoomSelection
        onClick={() => this.props.setIdIsSelected(this.props.id)}
        container
        background-color={isSelected
          ? theme.backgroundColor.selectBoxSelection
          : theme.backgroundColor.boxSelection}
      >
        <GridAvatar item xs={2}>
          <Avatar src={this.props.avatar} />
        </GridAvatar>
        <Grid item xs={8}>
          <h4>{this.props.title}</h4>
          <MoreInfo>Thành viên</MoreInfo>
          <br />
          <MoreInfo>{this.getListMemberAsString()}</MoreInfo>
        </Grid>
        <GridOption item xs={2}>
          <ExitToAppIcon />
        </GridOption>
      </WrapMusicRoomSelection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idIsSelected: state.musicRoomSelection.idMusicRoomCurrent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIdIsSelected: id => dispatch(selectMusicRoom(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicRoomSelection);
