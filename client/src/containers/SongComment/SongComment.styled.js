import styled from 'styled-components';
import theme from '@src/root/theme';

import {
  AvatarUserInfo,
  UserNameInfo,
  WrapUserInfo,
} from '@components/Component.styled';

export const WrapUserComment = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: flex-start;
`;

export const AvatarUserComment = styled(AvatarUserInfo)`
  width: 30px !important;
  height: 30px !important;
  margin-right: 5px !important;
  display: inline-block !important;
  border: 1px solid grey;
`;

export const UserNameComment = styled(UserNameInfo)`
  color: ${theme.color.online};
  margin: 0;
  cursor: pointer;
`;

export const WrapSongComment = styled.div`
  width: 90%;
  margin: 7.5px 0;
  display: flex;
  flex-direction: row;
`;

export const WrapContentComment = styled.div`
  background-color: ${theme.backgroundColor.commentLine};
  word-wrap: break-word;
  display: inline-block;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 0.75em;
`;

export const ContentComment = styled.div`
  padding-left: 30px;
  display: inline-block;
`;
