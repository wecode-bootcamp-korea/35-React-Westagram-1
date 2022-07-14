import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
  const { id, pw } = inputValue;
  const checkValue = id.includes('@') && pw.length > 5;

  return (
    <form
      className="login-container"
      onSubmit={e => {
        e.preventDefault();
        navigate('/main-wonyoung');
        // fetch('http://10.58.4.188:8000/users/login', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     email: inputValue.id,
        //     password: inputValue.pw,
        //   }),
        // })
        //   .then(res => res.json())
        //   .then(res => {
        //     if (res.message === 'SUCCESS') {
        //       if (res.access_token) {
        //         localStorage.setItem('wy-token', res.access_token);
        //         navigate('/main-wonyoung');
        //       }
        //     } else if (res.message === 'INVALID_USER') {
        //       alert('정보가 틀립니다.');
        //     } else if (res.message === 'KEY_ERROR') {
        //       alert('키 에러입니다.');
        //     }
        //   });
      }}
      onChange={e => {
        handleInput(e);
      }}
    >
      <div className="westagram-logo-login">westagram</div>
      <input
        type="text"
        name="id"
        className="login id-box"
        placeholder="전화번호, 사용자 이름 또는 이메일"
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
      <button className="login-button" disabled={!checkValue}>
        로그인
      </button>
      <div className="forgot-pw">
        <Link
          to="https://www.instagram.com/accounts/password/reset/"
          className="didYouForgotPw"
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </form>
  );
};

export default Form;
