import { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";


function Login() {


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw =  JSON.stringify({
      username: inputs.username,
      password: inputs.password
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    fetch("https://api.nitirat.co.th/auth/sign-in", requestOptions)
     
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.message === "OK") {
            
            Swal.fire("Logged In", "", "success")
            .then(() => {
              localStorage.setItem(result.data.access_token)
             
            })
            
          } else {
            Swal.fire("Please check your login information", "", "error");
            
          }
        })
        .catch(error => console.log("error", error));

    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="Password"
          ></input>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}

export default Login;
