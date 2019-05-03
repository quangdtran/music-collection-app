import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

import theme from '@src/root/theme';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

import {
  WrapSongSelection,
  WrapSongInfo,
  WrapOrdinalNumber,
  OrdinalNumber,
  WrapSongInfoDetail,
} from './SongSelection.styled';

import {
  changeSongIsSelected,
} from './action';

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
    if (this.props.number === 1) this.setState({ isSelected: true });
  }

  // lifecycle: check props change
  componentWillReceiveProps(nextProps, oldProps) {
    if (nextProps.idIsSelected !== oldProps.idIsSelected) {
      if (this.props.id === nextProps.idIsSelected) {
        this.setState({ isSelected: true });
      } else if (this.state.isSelected) this.setState({ isSelected: false });
    }
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
        onClick={() => this.props.changeSongIsSelected(id)}
        background-color={
          isSelected
            ? theme.backgroundColor.selectBoxSelection
            : 'white'
        }
      >
        <WrapOrdinalNumber>
          <OrdinalNumber>{this.props.number}</OrdinalNumber>
        </WrapOrdinalNumber>
        <WrapSongInfo>
          {
            isSelected
              ? <PauseCircleOutlineIcon className={classes.iconIsSelected} />
              : <PlayCircleOutlineIcon className={classes.icon} />
          }
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
    idIsSelected: state.songSelection.idIsSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSongIsSelected: id => dispatch(changeSongIsSelected(id)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SongSelection),
);
