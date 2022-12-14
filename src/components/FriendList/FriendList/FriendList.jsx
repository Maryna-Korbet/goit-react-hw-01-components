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

export default FriendList;

