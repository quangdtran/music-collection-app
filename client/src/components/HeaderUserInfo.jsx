import React from 'react';
import {
  WrapUserInfo,
  AvatarUserInfo,
  NameUserInfo,
} from '@components/Component.styled';

const user = {
  name: 'Tran Duy Quang',
  img: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p160x160/48390365_1639536876192328_8072917733261443072_n.jpg?_nc_cat=110&_nc_oc=AQkkDRSyK0DsqhG5hcJM-ExHSEyiTTjtmP3_puGIPXCYULo4LoY3_uoil3FML9rc8ns&_nc_ht=scontent.fsgn5-3.fna&oh=41337917128254d89ffad4ed5ab4476a&oe=5D3C2B43',
};

const HeaderUserInfo = (props) => {
  return (
    <WrapUserInfo container>
      <AvatarUserInfo style={{ border: '1px solid white' }} src={user.img} />
      <NameUserInfo href="http://fb.com" target="_blank" rel="noopener noreferrer">
        {user.name}
      </NameUserInfo>
    </WrapUserInfo>
  );
};

export default HeaderUserInfo;
