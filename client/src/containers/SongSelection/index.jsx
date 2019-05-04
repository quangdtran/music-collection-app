import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import theme from '@src/root/theme';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import {
  changeIsPlayState,
} from '@containers/HeaderMusicPlayBox/action';

import {
  changeSongIsSelected,
} from './action';

import {
  WrapSongSelection,
  WrapSongInfo,
  WrapOrdinalNumber,
  OrdinalNumber,
  WrapSongInfoDetail,
} from './SongSelection.styled';

const styles = {
  icon: {
    color: 'black',
    flex: '0 0 15%',
    fontSize: '2em',
    marginRight: '5%',
  },
  iconIsSelected: {
    color: theme.color.hoverIcon,
    flex: '0 0 15%',
    fontSize: '2em',
    marginRight: '5%',
  },
};

class SongSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  // lifecycle: check mount to set the first element is selected
  componentDidMount() {
    const {
      id,
      name,
      singer,
      number,
    } = this.props;
    if (this.props.number === 1) {
      this.props.changeSongIsSelected({
        id, name, singer, number,
      });
    }
  }

  // lifecycle: check props change
  componentWillReceiveProps(nextProps, oldProps) {
    if (this.props.id === nextProps.songIsSelected.id) {
      this.setState({ isSelected: true });
    } else if (this.state.isSelected) this.setState({ isSelected: false });
  }

  // method: render play or pause state
  renderPlayOrPause() {
    const { classes, isPlay } = this.props;
    if (this.state.isSelected) {
      return (
        isPlay
          ? <PauseCircleOutlineIcon className={classes.iconIsSelected} />
          : <PlayCircleOutlineIcon className={classes.iconIsSelected} />
      );
    }
    return <PlayCircleOutlineIcon className={classes.icon} />;
  }

  render() {
    const {
      classes,
      number,
      name,
      singer,
      id,
    } = this.props;
    const { isSelected } = this.state;
    return (
      <WrapSongSelection
        onClick={() => {
          this.props.changeSongIsSelected({
            id, number, name, singer,
          });
          this.props.changeIsPlayToTrue();
        }}
        background-color={
          isSelected
            ? theme.backgroundColor.selectBoxSelection
            : 'white'
        }
      >
        <WrapOrdinalNumber>
          <OrdinalNumber>{number}</OrdinalNumber>
        </WrapOrdinalNumber>
        <WrapSongInfo>
          {this.renderPlayOrPause()}
          <WrapSongInfoDetail>
            <h4>{this.props.name}</h4>
            <i>Nghệ sĩ: {this.props.singer}</i>
          </WrapSongInfoDetail>
        </WrapSongInfo>
      </WrapSongSelection>
    );
  }
}

SongSelection.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    songIsSelected: state.songSelection.songIsSelected,
    isPlay: state.headerMusicPlayBox.isPlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSongIsSelected: song => dispatch(changeSongIsSelected(song)),
    changeIsPlayToTrue: () => dispatch(changeIsPlayState(true)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SongSelection),
);
