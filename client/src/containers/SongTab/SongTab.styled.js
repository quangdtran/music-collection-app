import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapSongTab = styled.div`

`;

export const WrapOptionSong = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px;
  /* border-bottom: 1px solid ${theme.borderColor.wrap}; */
`;

export const WrapListSong = styled.div``;

export const WrapSearchSong = styled.div`
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

export const SearchSongInput = styled.input`
  margin-left: 3px;
  outline: none;
  border: none;
  background-color: ${props => props['background-color']};
`;
