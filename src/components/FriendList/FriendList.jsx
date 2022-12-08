import { FriendListItem } from "./FriendListItem";

const FriendList = ({friends}) => (
        <ul class="friend-list">
        {friends.map(friend => (
                <li key={friend.id} class="item">
                <FriendListItem
                    friend={friend}
                />
            </li>
            ))}
        </ul>
    )

export default FriendList;

