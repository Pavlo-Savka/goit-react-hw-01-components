import Friends from './Friends';
import friends from '../database/friends.json';
function FriendList() {
        return <ul className = "friend-list" >
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