
import './App.css';
import { Profile } from './components/Frofile';
import user from './user.json'

import { Statistics } from './components/Staristics';
import  statistics  from './statistics.json';

import { FriendList } from './components/exercise3/Friends';
import friends from './friends.json'

import {TransactionHistory} from './components/TransactionHistory'
import trans from './transactions.json'


function App() {
  return (
    <div className="App">
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics 
      title='Upload stats'
      stats={statistics}
      />

      <FriendList friends={friends}/>

      <TransactionHistory items={trans}/>
    </div>
  );
}

export default App;
