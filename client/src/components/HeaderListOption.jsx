import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import theme from '@src/root/theme';
import {
  WrapListOption,
} from '@components/Component.styled';

import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SettingIcon from '@material-ui/icons/Settings';

const styles = {
  icon: {
    color: theme.color.textHeaderBar,
    cursor: 'pointer',
    flex: '0 0 15%',
    fontSize: '1.75em',
    '&:hover': {
      color: theme.color.hoverIcon,
    },
  },
};

const HeaderListOption = (props) => {
  const { classes } = props;
  return (
    <WrapListOption container>
      <DeleteIcon className={classes.icon} />
      <PlaylistAddIcon className={classes.icon} />
      <AddBoxIcon className={classes.icon} />
      <SettingIcon className={classes.icon} />
    </WrapListOption>
  );
};

HeaderListOption.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderListOption);
