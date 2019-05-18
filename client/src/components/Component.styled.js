import styled from 'styled-components';
import theme from '@src/root/theme';
import {
  Avatar,
  Grid,
} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// Item result component ------------------------------------
export const WrapContentItemResult = styled.div`
  margin-left: 10px;
`;

export const AvatarItemResult = styled(Avatar)`
  margin: 0;
`;

export const WrapItemResult = styled(Grid)`
  padding: 10px 10px;
  align-items: center;
  cursor: pointer;

  &:hover{
    background-color: #ecf0f7;
  }
`;

export const IconOnlOff = styled(FiberManualRecordIcon)`
  width: 10px;
  height: 10px;
  font-size: 15px !important;
  color: ${props => props['icon-color']};
`;

// HeaderUserInfo component

export const WrapUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarUserInfo = styled(Avatar)`
  margin: 0;
  margin-right: 0.65em;
  width: 40px !important;
  height: 40px !important;
`;

export const UserNameInfo = styled.a`
  color: ${theme.color.textHeaderBar};
  align-self: start;
  margin-top: 0.25em;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// HeaderListOption component

export const WrapListOption = styled(Grid)`
  align-items: center;
  justify-content: center;
`;

// other component --------------------------------------
