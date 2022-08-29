import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUsers } from "./redux/userList";

function App() {
  const [allUsers, setAllUsers] = useState();
  const { users } = useSelector((state) => state.users);
  // console.log(users);
  const dispatch = useDispatch();
  // let data = getUsers();
  // console.log(data);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <table>
        <thead>
          <tr>
            <th>email</th>
            <th>firstName</th>
            <th>lastName</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            const { id, email, first_name, last_name } = item;
            return (
              <tr key={id}>
                <td>{email}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
