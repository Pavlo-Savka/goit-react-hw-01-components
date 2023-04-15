import PropTypes from 'prop-types';
import css from './Friends.module.css';
function Friends(props) {
    const { isOnline, avatar, name } = props;
    return <>
        <span className={`${css.status} ${isOnline ? css['status--online'] : css['status--offline']}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
   </>
};
Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;