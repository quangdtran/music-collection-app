import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapPlaylistTab = styled.div`

`;

export const WrapOptionPlaylist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px;
  /* border-bottom: 1px solid ${theme.borderColor.wrap}; */
`;

export const WrapListPlaylist = styled.div``;

export const WrapSearchPlaylist = styled.div`
  background-color: ${props => props['background-color']};
  border: 1px solid;
  border-color: ${props => props['border-color']};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 7px;
  margin-right: 5%;
`;

export const SearchPlaylistInput = styled.input`
  margin-left: 3px;
  outline: none;
  border: none;
  background-color: ${props => props['background-color']};
`;
