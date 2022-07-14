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

  //변수명, 함수명은 직관적으로!
  const handleInput = e => {
    //e : 이벤트 객체
    //target : 객체 e의 key 중 하나
    const { name, value } = e.target;
    //스프레드 연산자 -> 초기값을 보존하는 역할.
    //[name] => []? 동적으로 관리하겠다는 의미.
    setInputValue({ ...inputValue, [name]: value });
  };

  //Mission 2) Login | 로그인 버튼 활성화 (validation)
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
          onKeyUp={isValidLogin}
          onChange={handleInput}
        >
          <input
            id="loginId"
            className="login-id"
            type="text"
            name="loginId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            id="loginPW"
            className="login-pw"
            type="password"
            name="loginPw"
            placeholder="비밀번호"
          />
          <button
            id="loginButton"
            className={'login-button' + (isValidLogin ? ' active' : '')}
            disabled={!isValidLogin}
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
