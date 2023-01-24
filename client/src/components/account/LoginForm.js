import React, { useState } from "react";

export default function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }







    return(
        <form onSubmit={handleSubmit}>
        <div className="inline fields">
          <label><strong>Username:</strong></label>
          <input type="text" id="username" placeholder="Enter username..." value={username} onChange={(e) => setUsername(e.target.value)} />

          <label><strong>Password:</strong></label>
          <input type="password" id="password" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="ui button" type="submit">
          Login
        </button>
      </form>

    )
}