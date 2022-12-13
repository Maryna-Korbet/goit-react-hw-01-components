import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export default function Profile({ username, tag, location, avatar, stars }) { 
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>{stars.followers}</span>
                    <span className={css.quantity}>1000</span>
                </li>
                <li>
                    <span className={css.label}>{stars.views}</span>
                    <span className={css.quantity}>2000</span>
                </li>
                <li>
                    <span className={css.label}>{stars.likes}</span>
                    <span className={css.quantity}>3000</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stars: PropTypes.object.isRequired,
};
