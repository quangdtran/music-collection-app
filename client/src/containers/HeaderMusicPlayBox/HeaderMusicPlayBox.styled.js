import styled from 'styled-components';
import theme from '@src/root/theme';

import { Tooltip } from '@material-ui/core';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';

export const WrapHeaderMusicPlayBox = styled.div`
  background-color: ${theme.backgroundColor.playBox};
  color: white;
  padding: 0 10px;
  letter-spacing: 2px;
`;

export const SongInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const SongPlayBox = styled.div`
  margin: 0 5px !important;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px 0;
`;

export const SongTimeline = styled.div`
  position: relative;
  background-color: ${theme.backgroundColor.timeline};
  height: 0.5em;
  border-radius: 25px;
  cursor: pointer;
`;

export const SongTimelineLoaded = styled.div`
  position: absolute;
  background-color: ${theme.color.online};
  height: 0.5em;
  border-radius: 25px;
  top: 0;
  left: 0;
  width: ${props => props['width-is-loaded']}%;
`;

export const PointShowCurrentTime = styled(Tooltip)`
  position: absolute;
  left: ${props => props.left}%;
`;

export const InnerPointShowCurrentTime = styled.div`
  position: absolute;
  left: ${props => props.left}%;
  background-color: none;
  height: 100%;
  width: 2px;
`;

export const InnerPointTimeline = styled.div`
  height: 0.5em;
  width: 0.5em;
  border-radius: 100%;
  background-color: ${theme.backgroundColor.timeline};
`;

export const PointTimeline = styled.div`
  position: absolute;
  left: ${props => props.left}%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100%;
  background-color: white;
  height: 1em;
  width: 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${InnerPointTimeline} {
    transition: 0.4s;
    background-color: ${theme.backgroundColor.blue};
  }
`;

export const LeftOptionPlayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

export const RightOptionPlayBox = styled.div`
  align-items: center;
  justify-content: flex-end;
  display: flex;
  position: absolute;
  right: 0;
  width: 50%;
`;

export const ItemOptionPlayBox = styled.div`
  margin: 0 5px;
`;

export const WrapVolumeOption = styled.div`
  width: 0;
  height: 40px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  visibility: ${props => (props['is-show'] ? 'visible' : 'hidden')};
  opacity: ${props => (props['is-show'] ? 1 : 0)};
  width: ${props => (props['is-show'] ? '25%' : '0%')};
  &:hover {
    width: 25% !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

export const InnerPointVolume = styled(InnerPointTimeline)`
  width: 0.5em;
  height: 0.5em;
`;

export const VolumeLine = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  background-color: ${theme.backgroundColor.timeline};
  cursor: pointer;
  border-radius: 25px;
`;

export const VolumeLineCurrent = styled(VolumeLine)`
  position: absolute;
  width: ${props => (props.volume > 1 ? 100 : props.volume * 100)}%;
  right: 0;
  top: 0;
  background-color: ${theme.backgroundColor.blue} !important;
`;

export const PointVolume = styled(PointTimeline)`
  position: absolute;
  right: ${props => (props.volume > 1 ? 100 : props.volume * 100)}%;
  transform: translate(50%, -50%);
  height: 0.75em;
  width: 0.75em;
  cursor: pointer;

  &:hover ${InnerPointVolume} {
    transition: 0.4s;
    background-color: ${theme.color.blue}
  }
`;
