import styled from 'styled-components';

import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const Title = styled.h1`
  color: green;
  text-shadow: 1px 1px 1px;
`;

export const WrapApp = styled.div`
  height: 100%;
`;

export const GridAppBody = styled(Grid)`
  height: 100%;
`;

export const GridMusicRoomSideBar = styled(Grid)`
  height: 100%;
  border-right: 1px solid ${theme.borderColor.wrap};
`;
