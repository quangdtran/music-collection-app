import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapSongSelection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid white;
  border-left: none;
  background-color: ${props => props['background-color']};
`;

export const WrapSongInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0px;
  padding-left: 5%;
  margin-left: 10%;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${theme.backgroundColor.hoverBoxSelection};
  }
`;

export const WrapOrdinalNumber = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  background-color: ${theme.backgroundColor.selectBoxSelection};
`;
export const OrdinalNumber = styled.h4`
`;

export const WrapSongInfoDetail = styled.div`
  width: 100%;
`;
