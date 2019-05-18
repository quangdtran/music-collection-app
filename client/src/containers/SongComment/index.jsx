import React, { Component } from 'react';

import {
  Avatar,
} from '@material-ui/core';

import {
  AvatarUserInfo,
  UserNameInfo,
  WrapUserInfo,
} from '@components/Component.styled';

import {
  WrapSongComment,
  WrapContentComment,
  AvatarUserComment,
  UserNameComment,
  WrapUserComment,
  ContentComment,
} from './SongComment.styled';

export default class SongComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      img,
      userName,
      content,
    } = this.props;
    return (
      <WrapSongComment>
        <AvatarUserComment src={img} />
        <WrapContentComment>
          <p>
            <UserNameComment>{userName}</UserNameComment>
          </p>
          <p>{content}</p>
        </WrapContentComment>
      </WrapSongComment>
    );
  }
}
