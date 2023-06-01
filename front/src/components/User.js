import { useRef } from "react";

function User({ user, count }) {
  const userRef = useRef(user.name);

  const handleClick = () => {
    console.log("================= ", userRef.current.innerText);
  };

  return (
    <tr ref={userRef} onClick={handleClick}>
      <td>{count}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
}

export default User;
