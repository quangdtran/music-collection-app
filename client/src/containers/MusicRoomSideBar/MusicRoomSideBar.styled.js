import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapMusicRoomSideBar = styled.div`

`;

export const WrapOptionSideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px;
  border-bottom: 1px solid ${theme.borderColor.wrap};
`;

export const WrapListMusicRoom = styled.div``;

export const WrapSearchRoom = styled.div`
  background-color: ${props => props['background-color']};
  border: 1px solid;
  border-color: ${props => props['border-color']};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 7px;
`;

export const SearchRoomInput = styled.input`
  margin-left: 3px;
  outline: none;
  border: none;
  background-color: ${props => props['background-color']};
`;
