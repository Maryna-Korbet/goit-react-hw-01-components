import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stars }) { 
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt={username}
                    class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">{stars.followers}</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">{stars.views}</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">{stars.likes}</span>
                    <span class="quantity">3000</span>
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
