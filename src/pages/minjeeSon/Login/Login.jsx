import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginMinjee() {
  //Main page로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-minjee');
  };

  //Mission 1) Login | 사용자 입력 데이터 저장
  const [inputValue, setInputValue] = useState({
    loginId: '',
    loginPw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  //Mission 2) Login | 로그인 버튼 활성화 (validation)
  const [isValid, setIsValid] = useState(false);

  const isValidLogin =
    inputValue.loginId.includes('@') && inputValue.loginPw.length >= 5;

  //로그인 통신 실습
  // const goToServer = () => {
  //   fetch('http://10.58.6.69:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: inputValue.loginId,
  //       password: inputValue.loginPw,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result);
  //       if (result.access_token) {
  //         localStorage.setItem('token', result.access_token);
  //         goToMain();
  //       } else {
  //         alert('아이디 혹은 비밀번호가 다릅니다!!!');
  //       }
  //     });
  // };

  return (
    <div className="login-minjee">
      <div className="container">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <form />
        <form
          id="loginForm"
          className="login-form"
          onKeyUp={() => setIsValid(isValidLogin)}
        >
          <input
            id="loginId"
            className="login-id"
            type="text"
            name="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            id="loginPW"
            className="login-pw"
            type="password"
            name="loginPw"
            placeholder="비밀번호"
            onChange={handleInput}
          />
          <button
            id="loginButton"
            className={'login-button' + (isValid ? ' active' : '')}
            disabled={isValid ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="forget-pw">
          <a href="https://www.instagram.com/accounts/password/reset/">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginMinjee;
