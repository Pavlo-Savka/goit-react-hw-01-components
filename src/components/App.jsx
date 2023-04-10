import Profile from './Profile.jsx';
import user from '../database/user.json';
import Statistics from './Statistics.jsx';
import data from '../database/data.json';
import TransactionHistory from './TransactionHistory.jsx';
import FriendList from './FriendList.jsx';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers }
        views={ user.stats.views}
        likes={user.stats.likes }
      />
      <Statistics
        docx={data[0].percentage}
        mp3={data[2].percentage}
        pdf={data[1].percentage}
        mp4={data[3].percentage}
      />
        <FriendList />        
        <TransactionHistory />
    </div>
  );
};