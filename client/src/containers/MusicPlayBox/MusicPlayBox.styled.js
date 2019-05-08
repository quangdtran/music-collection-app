import styled from 'styled-components';
import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const WrapMusicPlayBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapHeaderMusicPlayBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.borderColor.wrap};
  height: 32%;
`;

export const BodyMusicPlayBox = styled(Grid)`
  width: 100%;
  display: flex;
  height: 57%;
`;

export const GridListSongPlaylist = styled(Grid)`

`;
