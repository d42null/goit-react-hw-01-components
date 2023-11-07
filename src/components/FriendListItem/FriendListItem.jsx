import PropTypes from 'prop-types';
import { Avatar, ListItem, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt="User avatar" />
    <Name>{name}</Name>
  </ListItem>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
