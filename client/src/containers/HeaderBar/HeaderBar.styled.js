import styled from 'styled-components';
import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const SearchInput = styled.input`
  background-color: hsla(0,0%,100%,.125);
  border: 0;
  box-shadow: none;
  padding: 5px 11px;
  width: 100%;
  font-size: 16px;
  border-radius: 2px;
  &:focus {
    border: 0;
    outline: none;
    background-color: white !important;
  }
`;

export const WrapSearchInput = styled.div`
  position: relative;
  border-radius: 2px;
  border: 0;
  box-shadow: none;
  padding: 0px 10px;
  width: 90%;
`;

export const SearchResultBox = styled.div`
  position: absolute;
  z-index: 1001;
  color: black;
  width: 100%;
  background-color: white;
  top: 110%;
  border-radius: 2px;
  border: 1px solid #d1d5da;
  box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
`;

export const HeaderSearchResultBox = styled.div`
  color: #90949c;
  background-color: #f5f6f7;
  text-align: center;
  padding: 5px 10px;
`;

export const ItemSearchResultBox = styled.div``;

export const WrapHeaderBar = styled.div`
  width: 100%;
  background: ${theme.backgroundColor.headerBar};
  color: ${theme.color.textHeaderBar};
`;

export const WrapGrid = styled(Grid)`
  padding: 12px;
  align-items: center;
`;

export const GridItem = styled(Grid)`
  line-height: 150%;
`;
