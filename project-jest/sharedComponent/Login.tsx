import React, { useState } from "react";

interface LoginProps {
  onSubmit: ({ username, password }: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    onSubmit({
        username: username,
        password: password,
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username:</label>
        <input
          type="text"
          id="username-field"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password-field">Password:</label>
        <input
          type="password"
          id="password-field"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};
export default Login;
