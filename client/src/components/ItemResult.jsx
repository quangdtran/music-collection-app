import React from 'react';

import { Avatar, Grid } from '@material-ui/core';

import theme from '@src/root/theme';

import {
  WrapItemResult,
  AvatarItemResult,
  WrapContentItemResult,
  IconOnlOff,
} from './Component.styled';

const ItemResult = (props) => {
  const { isOnline } = props;
  return (
    <WrapItemResult container>
      <AvatarItemResult src={props.img} alt="" />
      <WrapContentItemResult>
        <p>{props.name}</p>
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <IconOnlOff
            icon-color={isOnline ? theme.color.online : theme.color.offline}
          />
          <i>{isOnline ? 'online' : 'offline'}</i>
        </div>
      </WrapContentItemResult>
    </WrapItemResult>
  );
};

export default ItemResult;
