import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // 네비게이션 영역, MainPage로 이동
  const navigate = useNavigate();
  const postUserData = () => {
    navigate('/main-seonghun');
  };
  // 아이디, 패스워드 검증 영역
  const [id, setId] = useState('');
  const checkId = e => setId(e.target.value);
  const [pw, setPw] = useState('');
  const checkPw = e => setPw(e.target.value);
  // 버튼 활성화 영역
  const [disable, setDisable] = useState(true);
  const handleBtn = () => {
    id.includes('@') && pw.length >= 5 ? setDisable(false) : setDisable(true);
  };
  // Login 랜더 영역
  return (
    <div className="login">
      <div className="loginCard">
        <h2>WestagramLogin</h2>
        <form className="form">
          <label className="idLabel">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="id"
              onChange={checkId}
              onKeyUp={handleBtn}
            />
          </label>
          <label className="idLabel">
            <input
              type="password"
              placeholder="Password"
              className="pw"
              onChange={checkPw}
              onKeyUp={handleBtn}
            />
          </label>
          <button
            type="button"
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
