import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList/FriendList';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import user from 'components/data/user.json';
import data from 'components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from 'components/data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        flexDirection: 'column',
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stars={user.stats}
      />
      <Statistics
        title="Upload stats" 
        stats={data}
      />  
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
      </div>
  );
};
