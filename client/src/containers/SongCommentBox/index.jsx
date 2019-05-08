import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import theme from '@src/root/theme';

import {
  WrapSongCommentBox,
  CaptionBox,
  CommentBox,
  WrapListComment,
  CommentInput,
  SendButton,
} from './SongCommentBox.styled';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: theme.backgroundColor.searchMusicRoom,
      borderColor: 'white',
      commentText: '',
    };
  }

  // method: handler key down search room input
  handlerKeyDownSearchRoom(evt) {
    if (evt.keyCode === 27) {
      ReactDOM.findDOMNode(this.refs['comment-input']).blur();
    }
  }

  // method: update search text
  updateCommentText(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <WrapSongCommentBox>
        <CaptionBox>
          <p>Tình yêu là mãi mãi !!</p>
        </CaptionBox>
        <WrapListComment />
        <CommentBox>
          <CommentInput
            type="text"
            ref="comment-input"
            placeholder="Nhập comment..."
            background-color={this.state.bgColor}
            border-color={this.state.borderColor}
            name="commentText"
            value={this.state.commentText}
            onChange={evt => this.updateCommentText(evt)}
            onFocus={() => {
              this.setState({
                bgColor: 'white',
                borderColor: theme.borderColor.focusSearchMusicRoom,
              });
            }}
            onBlur={() => {
              this.setState({
                bgColor: theme.backgroundColor.searchMusicRoom,
                borderColor: 'white',
              });
            }}
            onKeyDown={evt => this.handlerKeyDownSearchRoom(evt)}
          />
          <SendButton
            onselectstart="return false;"
            unselectable="on"
            onmousedown="return false;"
          >
            <span>POST</span>
          </SendButton>
        </CommentBox>
      </WrapSongCommentBox>
    );
  }
}
