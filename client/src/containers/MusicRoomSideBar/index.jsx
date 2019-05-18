import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import theme from '@src/root/theme';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import PlaylistTab from '@containers/PlaylistTab';
import SongTab from '@containers/SongTab';

import MusicRoomSelection from '@containers/MusicRoomSelection';

import {
  WrapMusicRoomSideBar,
  WrapTabSelection,
  TabSelection,
} from './MusicRoomSideBar.styled';

import {
  FRIEND_TAB,
  PLAYLIST_TAB,
  SONG_TAB,
} from './constants';

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

class MusicRoomSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIsSelected: SONG_TAB,
    };
  }

  // method: render tab
  renderTab() {
    const { tabIsSelected } = this.state;
    switch (tabIsSelected) {
      case SONG_TAB: return <SongTab />;
      case PLAYLIST_TAB: return <PlaylistTab />;
      case FRIEND_TAB: return 'Unknowed';
      default: return 'Unknowed';
    }
  }

  render() {
    const { classes } = this.props;
    const {
      tabIsSelected,
    } = this.state;
    return (
      <WrapMusicRoomSideBar>
        <WrapTabSelection container>
          <TabSelection
            onClick={() => this.setState({ tabIsSelected: SONG_TAB })}
            item
            color={
              tabIsSelected === SONG_TAB
                ? theme.color.online
                : 'black'
            }
            border-color-bottom={
              tabIsSelected === SONG_TAB
                ? 'white'
                : theme.borderColor.wrap
            }
            border-color-right={
              tabIsSelected === SONG_TAB
                ? theme.borderColor.wrap
                : 'white'
            }
            xs={4}
          >
            Bài hát
          </TabSelection>

          <TabSelection
            onClick={() => this.setState({ tabIsSelected: PLAYLIST_TAB })}
            item
            xs={4}
            color={
              tabIsSelected === PLAYLIST_TAB
                ? theme.color.online
                : 'black'
            }
            border-color-bottom={
              tabIsSelected === PLAYLIST_TAB
                ? 'white'
                : theme.borderColor.wrap
            }
            border-color-right={
              tabIsSelected === PLAYLIST_TAB
                ? theme.borderColor.wrap
                : 'white'
            }
            border-color-left={
              tabIsSelected === PLAYLIST_TAB
                ? theme.borderColor.wrap
                : 'white'
            }
          >
            Playlist
          </TabSelection>

          <TabSelection
            onClick={() => this.setState({ tabIsSelected: FRIEND_TAB })}
            item
            xs={4}
            color={
              tabIsSelected === FRIEND_TAB
                ? theme.color.online
                : 'black'
            }
            border-color-bottom={
              tabIsSelected === FRIEND_TAB
                ? 'white'
                : theme.borderColor.wrap
            }
            border-color-left={
              tabIsSelected === FRIEND_TAB
                ? theme.borderColor.wrap
                : 'white'
            }
          >
            Bạn bè
          </TabSelection>
        </WrapTabSelection>
        {this.renderTab()}
      </WrapMusicRoomSideBar>
    );
  }
}

MusicRoomSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MusicRoomSideBar);
