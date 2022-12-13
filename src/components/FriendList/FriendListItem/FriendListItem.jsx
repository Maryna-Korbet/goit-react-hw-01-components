import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </>
    );
}

// FriendListItem.propTypes = {
//     friend: PropTypes.arrayOf(
//         PropTypes.exact({
//             avatar: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             isOnline:PropTypes.bool.isRequired,
//         }),
//     )
// }

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool
}