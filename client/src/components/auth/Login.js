import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/auth";

function Login({ isAuthenticated, loginUser }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const changeLoginData = (e) => {
    setLoginData((value) => ({ ...value, [e.target.name]: e.target.value }));
  };

  const submitLogin = (e) => {
    e.preventDefault();

    loginUser({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <LoginStyle>
      <div>
        <div className='login_background d-flex justify-content-center align-items-center'>
          <form className='login_form' onSubmit={(e) => submitLogin(e)}>
            <div className='form-group text-center text-light mb-5'>
              <div>
                <h2>Sign In</h2>
                <div className='underLine mx-auto'></div>
              </div>
            </div>
            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-user' aria-hidden='true'></i>
              </div>
              <input
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => changeLoginData(e)}
                required
              />
            </div>
            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-unlock-alt'></i>
              </div>
              <input
                type='password'
                className='form-control'
                placeholder='Passoword'
                name='password'
                value={password}
                onChange={(e) => changeLoginData(e)}
                required
              />
            </div>

            <div className='form-group'>
              <div className='icon'>
                <i className='fas fa-sign-in-alt'></i>
              </div>
              <button type='submit' className='btn btn-primary bg-light'>
                Sign In
              </button>
            </div>

            <div className='form-group'>
              <span>
                Not Registered?{" "}
                <Link
                  to='/register'
                  className='register'
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
.form-group .icon {
  display: none;
}
  .login_background {
    background-image:linear-gradient(315deg,#1f42ce 0%,#647dee 74%);
    width: 100%;
    height: 100vh;
  }
  h2 {
    font-style: italic;
    text-transform: capitalize;
}

  .login_form {
    width: 40% !important;
    padding: 3rem;
    border-radius: 11px;
    background-image:linear-gradient(315deg,#1f42ce 0%,#647dee 74%);
    box-shadow: 2px 0px 13px #fff;
  }

  .underLine {
    width: 100px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
  }

  .form-group {
    display: flex;
    justify-content: space-around;
    heigth: 3rem;
    margin-bottom: 30px;
  }

  .form-control {
    width: 100%;
    height: 3rem;
    border-radius: 10px;
}

  .btn {
    width: 40% !important;
    height: 3rem;
    color: background-color: #7f53ac;
background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);;
    border-radius: 11px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .btn:hover {
    color: white;
    background-color: background-color: #7f53ac;
background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%); !important;
    border: 1px solid white;
  }

  .icon {
    font-size: 2rem;
    background-color: white;
    width: 10%;
    text-align: center;
    border-radius: 3rem;
    color: background-color: #7f53ac;
background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);;
  }

  .register:hover {
    color: white !important;
    text-decoration: none;
  }
`;

Login.prototype = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
