import "./Login.scss";
// import "../../style/common.scss";
// import "../../style/reset.scss";
import { useNavigate } from "react-router-dom";

function LoginMinjee() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
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
        />
        <input
          id="loginPW"
          className="login-pw"
          type="password"
          placeholder="비밀번호"
        />
        <button
          id="loginButton"
          className="login-button"
          type="button"
          //   disabled
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
