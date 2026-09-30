
import './App.css'

import UserCardComponent from './UserCardComponent'
import data from './data.json';

function App() {
  

  return (
    <div>
      <h3>Assignment</h3>
    <div className='UserContainer'>
     
      {
        data.map((user)=>{
          return <UserCardComponent key={user.email} user={user}/>
        }
        )
      }
    </div>
    </div>
  )
}

export default App
