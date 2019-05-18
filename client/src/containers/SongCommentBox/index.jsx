import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import theme from '@src/root/theme';

import SongComment from '@containers/SongComment';

import {
  WrapSongCommentBox,
  CaptionBox,
  CommentBox,
  WrapListComment,
  CommentInput,
  SendButton,
} from './SongCommentBox.styled';

const listComment = [
  {
    id: 1,
    content: 'bài này nghe phê nè !!',
    userName: 'Nguyen Kim Long',
    img: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p160x160/48390365_1639536876192328_8072917733261443072_n.jpg?_nc_cat=110&_nc_oc=AQkkDRSyK0DsqhG5hcJM-ExHSEyiTTjtmP3_puGIPXCYULo4LoY3_uoil3FML9rc8ns&_nc_ht=scontent.fsgn5-3.fna&oh=41337917128254d89ffad4ed5ab4476a&oe=5D3C2B43',
  },
  {
    id: 2,
    content: 't thik BAT hát mấy bài balad hơn, bài này cũng được',
    userName: 'Vo Thanh Tai',
    img: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p160x160/48390365_1639536876192328_8072917733261443072_n.jpg?_nc_cat=110&_nc_oc=AQkkDRSyK0DsqhG5hcJM-ExHSEyiTTjtmP3_puGIPXCYULo4LoY3_uoil3FML9rc8ns&_nc_ht=scontent.fsgn5-3.fna&oh=41337917128254d89ffad4ed5ab4476a&oe=5D3C2B43',
  },
  {
    id: 3,
    content: 'bài này hay mà, t ko nghe được mấy nhạc nhẹ nhàng quá',
    userName: 'Nguyen Kim Long',
    img: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p160x160/48390365_1639536876192328_8072917733261443072_n.jpg?_nc_cat=110&_nc_oc=AQkkDRSyK0DsqhG5hcJM-ExHSEyiTTjtmP3_puGIPXCYULo4LoY3_uoil3FML9rc8ns&_nc_ht=scontent.fsgn5-3.fna&oh=41337917128254d89ffad4ed5ab4476a&oe=5D3C2B43',
  },
  {
    id: 4,
    content: 'bài này hay, nhưng phối lại theo chất liệu của âm nhạc nhật và phổ thành tiếng nhật + tiếng đức thì hay ^^',
    userName: 'Thai Xuan Tho',
    img: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p160x160/48390365_1639536876192328_8072917733261443072_n.jpg?_nc_cat=110&_nc_oc=AQkkDRSyK0DsqhG5hcJM-ExHSEyiTTjtmP3_puGIPXCYULo4LoY3_uoil3FML9rc8ns&_nc_ht=scontent.fsgn5-3.fna&oh=41337917128254d89ffad4ed5ab4476a&oe=5D3C2B43',
  },
];

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

  // method: render list comment
  renderListComment() {
    return listComment.map(comment => <SongComment key={comment.id} {...comment} />);
  }

  render() {
    return (
      <WrapSongCommentBox>
        <CaptionBox>
          <p>Tình yêu là mãi mãi !!</p>
        </CaptionBox>
        <WrapListComment>
          {this.renderListComment()}
        </WrapListComment>
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
