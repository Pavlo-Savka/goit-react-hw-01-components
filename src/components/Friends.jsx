import PropTypes from 'prop-types';
function Friends(props) {
    const { id, isOnline, avatar, name } = props;
    return < li className="item" key={id} >
        <span className="status">{isOnline ? 'Online' : 'Offline'}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li >
};
Friends.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;