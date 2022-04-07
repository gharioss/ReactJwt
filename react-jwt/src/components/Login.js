import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/php/login.php", data)
      .then((res) => localStorage.setItem("token", res.data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Inscription"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
