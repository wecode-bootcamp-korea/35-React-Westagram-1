import './Login.scss';
// import "../../style/common.scss";
// import "../../style/reset.scss";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginMinjee() {
  //Main page로 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-minjeeSon');
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

  return (
    <div className="container">
      <div className="logo">
        <h1>Westagram</h1>
      </div>
      <form id="loginForm" className="login-form">
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
          className="login-button"
          type="button"
          disabled
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
      <div className="forget-pw">
        <a href="/">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginMinjee;
