import React, { Component } from 'react';
import theme from '@src/root/theme';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';

import {
  WrapHeaderMusicPlayBox,
  SongInfoBox,
  SongPlayBox,
  SongTimeline,
  PointTimeline,
  InnerPointTimeline,
  LeftOptionPlayBox,
  RightOptionPlayBox,
  ItemOptionPlayBox,
} from './HeaderMusicPlayBox.styled';

const styles = {
  icon: {
    color: theme.color.textHeaderBar,
    cursor: 'pointer',
    flex: '0 0 15%',
    fontSize: '1.75em',
    '&:hover': {
      color: theme.color.hoverIcon,
    },
  },
};

class HeaderMusicPlayBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <WrapHeaderMusicPlayBox>
        <SongInfoBox>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
              margin: '20px 0',
            }}
            src="https://stc-id.nixcdn.com/v11/images/df-singer-300x300.jpg"
            alt=""
          />
        </SongInfoBox>
        <SongTimeline>
          <PointTimeline>
            <InnerPointTimeline />
          </PointTimeline>
        </SongTimeline>
        <SongPlayBox>
          <LeftOptionPlayBox>

            <ItemOptionPlayBox>
              {
                this.state.isPlay
                  ? <PauseIcon className={classes.icon} />
                  : <PlayArrowIcon className={classes.icon} />
              }
            </ItemOptionPlayBox>

            <ItemOptionPlayBox>
              <SkipPreviousIcon className={classes.icon} />
            </ItemOptionPlayBox>

            <ItemOptionPlayBox>
              <SkipNextIcon className={classes.icon} />
            </ItemOptionPlayBox>

            <ItemOptionPlayBox>
              <p>00:01/04:00</p>
            </ItemOptionPlayBox>

          </LeftOptionPlayBox>
          <RightOptionPlayBox>
            <VolumeUpIcon className={classes.icon} />
          </RightOptionPlayBox>
        </SongPlayBox>
      </WrapHeaderMusicPlayBox>
    );
  }
}

HeaderMusicPlayBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMusicPlayBox);
