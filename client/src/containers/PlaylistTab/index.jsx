import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import theme from '@src/root/theme';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import MusicRoomSelection from '@containers/MusicRoomSelection';

import {
  WrapPlaylistTab,
  WrapListPlaylist,
  WrapOptionPlaylist,
  WrapSearchPlaylist,
  SearchPlaylistInput,
} from './PlaylistTab.styled';

const listRoomMusicData = [
  {
    id: 1,
    title: 'Bùi Anh Tuấn',
    avatar: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/09/22/1/5/6/5/1506075171981_600.jpg',
    members: [
      'Võ Thành Tài',
      'Trần Duy Quang',
      'Kim Long',
      'Thái Xuân Thọ',
    ],
  },
  {
    id: 2,
    title: 'Bùi Anh Tuấn',
    avatar: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/09/22/1/5/6/5/1506075171981_600.jpg',
    members: [
      'Võ Thành Tài',
      'Trần Duy Quang',
      'Kim Long',
      'Thái Xuân Thọ',
    ],
  },
  {
    id: 3,
    title: 'Bùi Anh Tuấn',
    avatar: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/09/22/1/5/6/5/1506075171981_600.jpg',
    members: [
      'Võ Thành Tài',
      'Trần Duy Quang',
      'Kim Long',
      'Thái Xuân Thọ',
    ],
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

class PlaylistTab extends Component {
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
  renderListMusicRoom() {
    return listRoomMusicData.map((roomInfo, index) =>
      <MusicRoomSelection key={roomInfo.id} {...roomInfo} />);
  }

  render() {
    const { classes } = this.props;
    return (
      <WrapPlaylistTab>
        <WrapOptionPlaylist>
          <WrapSearchPlaylist
            border-color={this.state.borderColor}
            background-color={this.state.bgColor}
          >
            <SearchIcon style={{ color: 'grey' }} />
            <SearchPlaylistInput
              ref="search-room-input"
              placeholder="Tìm kiếm playlist"
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
          </WrapSearchPlaylist>
          <PlaylistAddIcon className={classes.icon} />
        </WrapOptionPlaylist>
        <WrapListPlaylist>
          {this.renderListMusicRoom()}
        </WrapListPlaylist>
      </WrapPlaylistTab>
    );
  }
}

PlaylistTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistTab);
