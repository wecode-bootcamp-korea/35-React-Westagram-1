import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const postUserData = () => {
    navigate('/main-seonghun');
  };

  const [inputValue, setInputvalue] = useState({
    userId: '',
    userPassword: '',
  });
  const { userId, userPassword } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputvalue({ ...inputValue, [name]: value });
  };

  const [disable, setDisable] = useState(true);
  const handleBtn = () => {
    userId.includes('@') &&
    userId.includes('.') &&
    userId.length >= 5 &&
    userPassword.length >= 5
      ? setDisable(false)
      : setDisable(true);
  };

  return (
    <div className="login">
      <div className="loginCard">
        <h2>WestagramLogin</h2>
        <form className="form" onKeyUp={handleBtn} onChange={handleInput}>
          <label className="idLabel">
            <input
              name="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="id"
            />
          </label>
          <label className="idLabel">
            <input
              name="userPassword"
              type="password"
              placeholder="Password"
              className="pw"
            />
          </label>
          <button
            type="submit"
            className="submitBtn"
            disabled={disable}
            onClick={postUserData}
          >
            Login
          </button>
        </form>
        <Link to="/main-seonghun" className="loginA">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
};

export default Login;
