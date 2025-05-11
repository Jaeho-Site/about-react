import React, { useState } from 'react';
import './App.css'; //map으로 age가 25이상인 user는 제외하고 렌더링 해봅시다
import Button from './components/Button.jsx';
import User from './components/User.jsx';

const App = () => {
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px",
  };
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  }
  return (
    <>
      <input value={name}
        placeholder="이름을 입력해주세요"
        onChange={(e) => setName(e.target.value)}
      />
      <input value={age}
        placeholder="나이를 입력해주세요"
        onChange={(e) => setAge(e.target.value)}
      />
      <div style={style}>
        {users.map((user) => {
          if (user.age >= 25) {
            return <User user={user} key={user.id} handleDelete={deleteUserHandler} />;
          }else{
            return null;
          }
        })}
        <Button color="green" onClick={addUserHandler}>추가하기</Button>
      </div>
    </>
  );
};
export default App;