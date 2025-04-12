import * as React from "react";
import { IUser } from "./UserAccount";

export const UserList = ({ users }: { users: IUser[] }) => {
  if (users.length === 0) {
    return <div>No users found</div>;
  }
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`#user-${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};