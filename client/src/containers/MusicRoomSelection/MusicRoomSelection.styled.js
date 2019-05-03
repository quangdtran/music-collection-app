import styled from 'styled-components';

import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const WrapMusicRoomSelection = styled(Grid)`
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
  background-color: ${props => props['background-color']};

  &:hover {
    background-color: ${theme.backgroundColor.hoverBoxSelection};
  }
`;

export const GridAvatar = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridOption = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${theme.color.hoverIcon};
  }
`;

export const MoreInfo = styled.i`
  font-size: 0.725em;
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
