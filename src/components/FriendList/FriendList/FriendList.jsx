import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import css from 'components/FriendList/FriendList/FriendList.module.css';

const FriendList = ({friends}) => (
        <ul className={css.list}>
        {friends.map(friend => (
                <li key={friend.id} className={css.item}>
                <FriendListItem
                    friend={friend}
                />
            </li>
            ))}
        </ul>
    )

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline:PropTypes.bool,
        })     
    ).isRequired,
}
export default FriendList;

