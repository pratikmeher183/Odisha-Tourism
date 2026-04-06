import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  // signup states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [message, setMessage] = useState("");

  // CREATE ACCOUNT
  const createAccount = () => {
    if (!name || !email || !password) {
      setMessage("Please fill all fields ❌");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    setMessage("Account created successfully ✅");

    // clear fields
    setName("");
    setEmail("");
    setPassword("");

    // go back to login after 1 second
    setTimeout(() => {
      setIsSignup(false);
      setMessage("");
    }, 1000);
  };

  // LOGIN
  const loginUser = () => {
    if (!loginEmail || !loginPassword) {
      setMessage("Enter email & password ❌");
      return;
    }

    const user = JSON.parse(localStorage.getItem(loginEmail));

    if (!user) {
      setMessage("User not found ❌");
    } else if (user.password === loginPassword) {
      setMessage("Login successful ✅");
    } else {
      setMessage("Wrong password ❌");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        {!isSignup ? (
          <div className="login-box">
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Enter Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button onClick={loginUser}>Login</button>

            <p>{message}</p>

            <p>
              Don't have an account?{" "}
              <span
                style={{ color: "cyan", cursor: "pointer" }}
                onClick={() => {
                  setIsSignup(true);
                  setMessage(""); // clear message
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-box">
            <h2>Create Account</h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={createAccount}>Create Account</button>

            <p>{message}</p>

            <p>
              Already have an account?{" "}
              <span
                style={{ color: "cyan", cursor: "pointer" }}
                onClick={() => {
                  setIsSignup(false);
                  setMessage("");
                }}
              >
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;