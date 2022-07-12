import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function LoginMinjee() {
  //Main page로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-minjee');
  };

  //Mission 1) Login | 사용자 입력 데이터 저장
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  //Mission 2) Login | 로그인 버튼 활성화 (validation)
  const [isValid, setIsValid] = useState(false);

  const isValidLogin = () => {
    return idInput.includes('@') && pwInput.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  return (
    <div className="login-minjee">
      <div className="container">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <form id="loginForm" className="login-form" onKeyUp={isValidLogin}>
          <input
            id="loginId"
            className="login-id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            id="loginPW"
            className="login-pw"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button
            id="loginButton"
            className={'login-button' + (isValid ? ' active' : '')}
            type="button"
            disabled={isValid ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="forget-pw">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginMinjee;
