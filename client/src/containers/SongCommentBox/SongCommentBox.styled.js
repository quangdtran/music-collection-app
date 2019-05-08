import styled from 'styled-components';
import theme from '@src/root/theme';

import {
  Grid,
} from '@material-ui/core';

export const WrapSongCommentBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CaptionBox = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.borderColor.wrap};
`;

export const WrapListComment = styled.div`
  height: 55%;
  width: 100%;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  padding: 10px 0;
`;

export const CommentInput = styled.input`
  padding: 0 20px;
  outline: none;
  border: none;
  width: 80%;
  border-radius: 25px;
  height: 100%;
  background-color: ${props => props['background-color']};
  border: 1px solid;
  border-color: ${props => props['border-color']};
`;

export const SendButton = styled.div`
  font-size: 15px;
  border-radius: 25px;
  background: ${theme.color.blue};
  height: 100%;
  width: 10%;
  margin-left: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select:none;
  user-select:none;
  -o-user-select:none;

  &:active {
    background: ${theme.color.activeBtn};
  }
`;
