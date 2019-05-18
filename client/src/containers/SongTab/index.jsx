import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import theme from '@src/root/theme';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import SongSelection from '@containers/SongSelection';

import {
  WrapSongTab,
  WrapListSong,
  WrapOptionSong,
  WrapSearchSong,
  SearchSongInput,
} from './SongTab.styled';

const listRoomMusicData = [
  {
    id: 1,
    name: 'Mãi mãi là của nhau',
    singer: 'Bùi Anh Tuấn',
  },
  {
    id: 2,
    name: 'Thả vào mưa',
    singer: 'Trung Quân Idol',
  },
  {
    id: 3,
    name: 'Anh nhà ở đâu thế',
    singer: 'Amee & B-Ray',
  },
];

const styles = {
  icon: {
    color: theme.color.iconSideBar,
    cursor: 'pointer',
    flex: '0 0 15%',
    fontSize: '1.75em',
    '&:hover': {
      color: theme.color.hoverIcon,
    },
  },
};

class SongTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: theme.backgroundColor.searchMusicRoom,
      borderColor: 'white',
      searchText: '',
    };
  }

  // method: handler key down search room input
  handlerKeyDownSearchRoom(evt) {
    if (evt.keyCode === 27) {
      this.setState({ searchText: '' });
      ReactDOM.findDOMNode(this.refs['search-room-input']).blur();
    }
  }

  // method: update search text
  updateSearchText(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  // method: render list music room
  renderListSong() {
    return listRoomMusicData.map((songInfo, index) =>
      <SongSelection number={index + 1} key={songInfo.id} {...songInfo} />);
  }

  render() {
    const { classes } = this.props;
    return (
      <WrapSongTab>
        <WrapOptionSong>
          <WrapSearchSong
            border-color={this.state.borderColor}
            background-color={this.state.bgColor}
          >
            <SearchIcon style={{ color: 'grey' }} />
            <SearchSongInput
              ref="search-room-input"
              placeholder="Tìm kiếm bài hát"
              background-color={this.state.bgColor}
              name="searchText"
              value={this.state.searchText}
              onChange={evt => this.updateSearchText(evt)}
              onFocus={() => {
                this.setState({
                  bgColor: 'white',
                  borderColor: theme.borderColor.focusSearchMusicRoom,
                });
              }}
              onBlur={() => {
                this.setState({
                  bgColor: theme.backgroundColor.searchMusicRoom,
                  borderColor: 'white',
                });
              }}
              onKeyDown={evt => this.handlerKeyDownSearchRoom(evt)}
            />
          </WrapSearchSong>
          <AddBoxIcon className={classes.icon} />
        </WrapOptionSong>
        <WrapListSong>
          {this.renderListSong()}
        </WrapListSong>
      </WrapSongTab>
    );
  }
}

SongTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SongTab);
