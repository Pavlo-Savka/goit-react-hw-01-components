import PropTypes from 'prop-types';
import defaultImage from '../../images/default-user-icon.jpg';
import css from './Profile.module.css';
function Profile(props) {
    const {avatar=defaultImage, username, tag, location, stats } = props;
    return <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.item}>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li className={css.item}>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li className={css.item}>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
};
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;