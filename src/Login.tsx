 // Login.tsx
import React from "react";

const Login: React.FC = () => {
  return (
    <div id="login-bg" className="container-fluid">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navigation Bar */}

      <div className="container" id="login">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="login">
              <h1>Login</h1>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-check">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                  <label className="forgot-password">
                    <a href="#">Forgot Password?</a>
                  </label>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-lg btn-block btn-success"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
