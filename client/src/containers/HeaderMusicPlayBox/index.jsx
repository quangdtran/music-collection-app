import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
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
  changeIsPlayState,
} from './action';

import {
  WrapHeaderMusicPlayBox,
  SongInfoBox,
  SongPlayBox,
  SongTimeline,
  SongTimelineLoaded,
  PointTimeline,
  InnerPointTimeline,
  LeftOptionPlayBox,
  RightOptionPlayBox,
  ItemOptionPlayBox,
  PointShowCurrentTime,
  InnerPointShowCurrentTime,
  VolumeUpIconStyled,
  WrapVolumeOption,
  VolumeLine,
  PointVolume,
  InnerPointVolume,
  VolumeLineCurrent,
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
      currentTime: 0,
      duration: 0,
      percentTimelineHover: 0,
      volume: 1,
      isShowVolumeOption: true,
    };
  }

  componentWillReceiveProps(newProps) {
    const audio = ReactDOM.findDOMNode(this.refs['audio-tag']);
    if (newProps.isPlay) {
      audio.play();
    } else audio.pause();
  }

  // get percent is loaded timeline
  getPercentTimeline(evt) {
    const timelineEl = ReactDOM.findDOMNode(this.refs['song-timeline']);
    const beginPos = timelineEl.offsetLeft;
    const width = timelineEl.offsetWidth;
    const percentIsLoaded = ((evt.clientX - beginPos) / width) * 100;
    return percentIsLoaded;
  }

  getPercentVolumeLine(evt) {
    const volumeLineEl = ReactDOM.findDOMNode(this.refs['volume-line']);
    const beginPos = volumeLineEl.getBoundingClientRect().left;
    const width = volumeLineEl.offsetWidth;
    const percentVolumeLine = 100 - (((evt.clientX - beginPos) / width) * 100);
    return percentVolumeLine;
  }

  setVolumeAtPoint(evt) {
    const percentVolume = this.getPercentVolumeLine(evt);
    this.setState({ volume: (percentVolume / 100) });
    console.log(percentVolume);
  }

  setPointTimelinePosition(evt) {
    const audio = ReactDOM.findDOMNode(this.refs['audio-tag']);
    this.setCurrentTime(evt);
  }

  setCurrentTime(evt) {
    const audio = ReactDOM.findDOMNode(this.refs['audio-tag']);
    audio.currentTime = this.state.duration * this.getPercentTimeline(evt) / 100;
  }

  setTooltipPosition(evt) {
    const percentTimelineHover = this.getPercentTimeline(evt);
    this.setState({ percentTimelineHover });
  }

  // method: update track time the song
  updateTrackTime() {
    const audio = ReactDOM.findDOMNode(this.refs['audio-tag']);
    this.setState({
      currentTime: Math.floor(audio.currentTime),
      duration: Math.floor(audio.duration),
    });
  }

  clickNextBtn() {
    const audio = ReactDOM.findDOMNode(this.refs['audio-tag']);
    audio.currentTime = 100;
  }

  renderTrackTime(timeFloat) {
    const timeInt = Math.floor(timeFloat);
    if (timeInt < 60) {
      return `00:${timeInt < 10 ? '0' : ''}${timeInt}`;
    }
    if (timeInt >= 60) {
      const minutes = Math.floor(timeInt / 60);
      const seconds = timeInt % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return null;
  }

  render() {
    const { classes, isPlay } = this.props;
    const {
      name,
      singer,
    } = this.props.songIsSelected;
    const {
      currentTime,
      duration,
      percentTimelineHover,
      isShowVolumeOption,
      volume,
    } = this.state;
    return (
      <WrapHeaderMusicPlayBox
        onDragStart={() => this.props.changeIsPlayState(false)}
        onDragOver={evt => this.setPointTimelinePosition(evt)}
        onDrop={() => this.props.changeIsPlayState(true)}
      >
        <SongInfoBox>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
              margin: '0 20px',
            }}
            src="https://stc-id.nixcdn.com/v11/images/df-singer-300x300.jpg"
            alt=""
          />
          <div
            style={{
              margin: '0 20px',
              textAlign: 'center',
            }}
          >
            <p>{name}</p>
            <p>Ca sĩ: {singer}</p>
          </div>
        </SongInfoBox>
        <SongTimeline
          ref="song-timeline"
          onClick={evt => this.setCurrentTime(evt)}
          onMouseEnter={evt => this.setTooltipPosition(evt)}
          onMouseMove={evt => this.setTooltipPosition(evt)}
        >
          <SongTimelineLoaded width-is-loaded={(currentTime / duration) * 100} />
          <PointShowCurrentTime
            title={this.renderTrackTime(percentTimelineHover * duration / 100)}
            placement="top"
          >
            <InnerPointShowCurrentTime left={percentTimelineHover} />
          </PointShowCurrentTime>
          <PointTimeline left={(currentTime / duration) * 99}>
            <InnerPointTimeline />
          </PointTimeline>
        </SongTimeline>
        <SongPlayBox>
          <LeftOptionPlayBox>

            <ItemOptionPlayBox
              onClick={() => this.props.changeIsPlayState(!isPlay)}
            >
              {
                isPlay
                  ? <PauseIcon className={classes.icon} />
                  : <PlayArrowIcon className={classes.icon} />
              }
            </ItemOptionPlayBox>

            <ItemOptionPlayBox>
              <SkipPreviousIcon className={classes.icon} />
            </ItemOptionPlayBox>

            <ItemOptionPlayBox
              onClick={() => this.clickNextBtn()}
            >
              <SkipNextIcon className={classes.icon} />
            </ItemOptionPlayBox>

            <ItemOptionPlayBox>
              <p>{`${this.renderTrackTime(currentTime)} / ${this.renderTrackTime(duration)}`}</p>
            </ItemOptionPlayBox>

          </LeftOptionPlayBox>
          <RightOptionPlayBox>
            <WrapVolumeOption is-show={isShowVolumeOption}>
              <VolumeLine
                ref="volume-line"
                onClick={evt => this.setVolumeAtPoint(evt)}
              >
                <VolumeLineCurrent volume={volume} />
                <PointVolume volume={volume}>
                  <InnerPointVolume />
                </PointVolume>
              </VolumeLine>
            </WrapVolumeOption>
            <VolumeUpIconStyled
              // onMouseOver={() => this.setState({ isShowVolumeOption: true })}
              // onMouseOut={() => this.setState({ isShowVolumeOption: false })}
              onFocus={() => {}}
              onBlur={(() => {})}
              className={classes.icon}
            />
          </RightOptionPlayBox>
        </SongPlayBox>
        <audio
          ref="audio-tag"
          volume={volume}
          src="http://localhost:3003/MaiMaiLaCuaNhau-BuiAnhTuan-4652621.mp3"
          preload="auto"
          onTimeUpdate={() => this.updateTrackTime()}
        >
          <track default kind="captions" />
        </audio>
      </WrapHeaderMusicPlayBox>
    );
  }
}

HeaderMusicPlayBox.propTypes = {
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
    changeIsPlayState: isPlay => dispatch(changeIsPlayState(isPlay)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(HeaderMusicPlayBox),
);
