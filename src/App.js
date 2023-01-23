import { useState } from 'react';
import './App.css';
import SelectUser from './SelectUser/SelectUser';
import UserInfo from './UserInfo/UserInfo';

const users = [
  {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    birthDate: "17-01-2000",
    email: "john.smith@sample.com",
  },
  {
    id: "2",
    firstName: "Bartosz",
    lastName: "Scout",
    birthDate: "06-05-2002",
    email: "bartosz.scout@sample.com",
  },
  {
    id: "3",
    firstName: "Marcelina",
    lastName: "Kowalska",
    birthDate: "20-05-1990",
    email: "kowalmarc@sample.com",
  }
];



function App() {
  const [userId, changeInfo] = useState(0);
  
  const selectedUser = e =>
  {
    changeInfo(e.target.value);
  }
  return (
    <>
      <h1>User Information</h1>
      <SelectUser selectedUser={selectedUser} users={users}/>
        {userId > 0 &&
          <UserInfo users={users[userId - 1]}></UserInfo>
        }
    </>
  );
}

export default App;
