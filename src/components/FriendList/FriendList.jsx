import Friends from '../Friends/Friends.jsx';
import friends from '../../database/friends.json';
import css from './FriendList.module.css';
function FriendList() {
        return <ul className={css["friend-list"]} >
            {friends.map(i => (
                    <Friends
          key={i.id}
          isOnline={i.isOnline}
          avatar={i.avatar}
          name={i.name}
                    />
          ))      
        } 
        </ul>
};
export default FriendList;