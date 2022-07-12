import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });
  const navigate = useNavigate();
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const checkValue = () => {
    const { id, pw } = inputValue;
    return !(id.includes('@') && pw.length > 5);
  };

  return (
    <form
      className="login-container"
      onSubmit={() => {
        navigate('/main-wonyoung');
      }}
      onChange={() => {
        checkValue();
      }}
    >
      <div className="westagram-logo-login">westagram</div>
      <input
        type="text"
        name="id"
        className="login id-box"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={e => {
          handleInput(e);
        }}
      />
      <input
        type="password"
        name="pw"
        className="login pw-box"
        placeholder="비밀번호"
        onChange={e => {
          handleInput(e);
        }}
      />
      <button className="login-button" disabled={checkValue()}>
        로그인
      </button>
      <div className="forgot-pw">
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </form>
  );
};

const LoginWonyoung = () => {
  return (
    <div className="login-wonyoung">
      <header> </header>
      <main className="login-main">
        <Form> </Form>
      </main>
      <footer> </footer>
    </div>
  );
};

export default LoginWonyoung;
