import Button from './Button.jsx';

const User = ({ user, handleDelete }) => {
  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid green",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div>
      <div style={squareStyle}>{user.age}살 {user.name}입니다.</div>
      <Button color="red" onClick={() => handleDelete(user.id)}>삭제하기</Button>
    </div>
  )
}

export default User;