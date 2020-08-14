import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline}) {
  
const statusClass = isOnline? styles.active : styles.notActive;
  return (
    <li className={styles.item}>
      <span className={statusClass}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,

  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
