import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";

function Button() {
  const handleButton = (e) => {
    e.preventDefault();

    const getInfo = localStorage.getItem("token");
    // console.log(jwtDecode(getInfo).id_user);
    axios
      .post("http://localhost:8000/php/infos.php", getInfo)
      .then((res) => console.log(res.data.email));
  };

  return (
    <div>
      <button onClick={handleButton}>Get Your element</button>
    </div>
  );
}

export default Button;
