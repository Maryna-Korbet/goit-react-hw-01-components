import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool
}