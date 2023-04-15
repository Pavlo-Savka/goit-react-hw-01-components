import Profile from './Profile/Profile.jsx';
import user from '../database/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from '../database/data.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import FriendList from './FriendList/FriendList.jsx';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats }
      />
      <Statistics
        title={'Upload stats'}
        stats={data}
      />
      <FriendList
        friends={friends}
      />        
      <TransactionHistory
      items={transactions}/>
    </div>
  );
};