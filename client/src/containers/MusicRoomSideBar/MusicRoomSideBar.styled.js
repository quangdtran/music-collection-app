import styled from 'styled-components';
import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const WrapMusicRoomSideBar = styled.div`
`;

export const WrapTabSelection = styled(Grid)`
  /* border-bottom: 1px solid ${theme.borderColor.wrap}; */
`;

export const TabSelection = styled(Grid)`
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid ${props => props['border-color-top'] || 'white'};
  border-bottom: 1px solid ${props => props['border-color-bottom'] || 'white'};
  border-left: 1px solid ${props => props['border-color-left'] || 'white'};
  border-right: 1px solid ${props => props['border-color-right'] || 'white'};
  color: ${props => props.color};

  &:hover {
    background-color: ${theme.backgroundColor.hoverBoxSelection};
  }
`;
