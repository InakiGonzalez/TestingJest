import * as React from "react";

export interface IUser {
  id: number;
  name: string;
  isManager: boolean;
}

export const UserAccount = ({ user }: { user: IUser }) => {
  // The UserAccount component receives a user prop and displays the user's name and edit button.
  return (
    <div>
      <h2>User Profile</h2>
      {user.isManager && <button>Edit</button>}
      <div>
        <strong>Name:</strong> {user.name}
      </div>
    </div>
  );
};
