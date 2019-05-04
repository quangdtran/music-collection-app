import styled from 'styled-components';
import theme from '@src/root/theme';

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

export const InnerPointTimeline = styled.div`
  height: 0.5em;
  width: 0.5em;
  border-radius: 100%;
  background-color: ${theme.backgroundColor.timeline};
`;

export const PointTimeline = styled.div`
  position: absolute;
  left: 0;
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
