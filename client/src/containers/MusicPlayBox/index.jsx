import React, { Component } from 'react';
import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

import SongSelection from '@containers/SongSelection';
import HeaderMusicPlayBox from '@containers/HeaderMusicPlayBox';

import {
  WrapMusicPlayBox,
  WrapHeaderMusicPlayBox,
  BodyMusicPlayBox,
  GridListSongPlaylist,
} from './MusicPlayBox.styled';

const songs = [
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
    singer: 'Amee',
  },
];


export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // method: render list song playing
  renderListSongPlaying() {
    return songs.map((song, i) => (
      <SongSelection
        key={song.id}
        number={i + 1}
        {...song}
      />
    ));
  }

  render() {
    return (
      <WrapMusicPlayBox>
        <WrapHeaderMusicPlayBox>
          <HeaderMusicPlayBox />
        </WrapHeaderMusicPlayBox>
        <BodyMusicPlayBox container>
          <Grid
            item
            xs={8}
            style={{
              height: '100%',
              borderRight: `1px solid ${theme.borderColor.wrap}`,
            }}
          >Unknowed
          </Grid>
          <GridListSongPlaylist item xs={4}>
            {this.renderListSongPlaying()}
          </GridListSongPlaylist>
        </BodyMusicPlayBox>
      </WrapMusicPlayBox>
    );
  }
}
