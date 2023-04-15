import PropTypes from 'prop-types';
import Friends from '../Friends/Friends.jsx';
import css from './FriendList.module.css';
function FriendList({friends}) {
        return <ul className={css["friend-list"]} >
            {friends.map(i => (
            < li className={css.item} key={i.id} >       
                    <Friends
          isOnline={i.isOnline}
          avatar={i.avatar}
          name={i.name}
         />
        </li >    
        ))              
        } 
        </ul>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})),
};
export default FriendList;