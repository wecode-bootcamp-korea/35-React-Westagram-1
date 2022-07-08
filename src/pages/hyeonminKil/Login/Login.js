import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/main");
  };
  const [valueTrue, setValueTrue] = useState("rgb(162, 224, 255)");
  const [idvalue, setIdvlaue] = useState("");
  const [trueDisabled, setTrueDisabled] = useState(true);
  const handleIdInput = (event) => {
    //console.log(event.target.value);
    setIdvlaue(event.target.value);
    let emailSearch = idvalue.indexOf("@");
    let fiveLength = passwordvalue.length;
    //console.log(emailSearch !== -1);
    console.log(fiveLength);
    //console.log(emailSearch !== -1); //결과 fales -1 true 0
    if (emailSearch !== -1 && fiveLength > 5) {
      setValueTrue("blue");
      setTrueDisabled(false);
      //loginButton.disabled = false;
      //console.log(typeof(secondResult));결과 string
    } else {
      setValueTrue("rgb(162, 224, 255)");
      setTrueDisabled(true);
      //loginButton.disabled = true;
    }
  };
  const [passwordvalue, setPasswordvalue] = useState("");
  const handlePasswordInput = (event) => {
    //console.log(event.target.value);
    setPasswordvalue(event.target.value);
    let emailSearch = idvalue.indexOf("@");
    let fiveLength = passwordvalue.length;
    //console.log(emailSearch !== -1);
    console.log(fiveLength);
    //console.log(emailSearch !== -1); //결과 fales -1 true 0
    if (emailSearch !== -1 && fiveLength > 5) {
      setValueTrue("blue");
      setTrueDisabled(false);
      //loginButton.disabled = false;
      //console.log(typeof(secondResult));결과 string
    } else {
      setValueTrue("rgb(162, 224, 255)");
      setTrueDisabled(true);
      //loginButton.disabled = true;
    }
  };
  return (
    <div className="login">
      <section className="wrapper">
        <span className="loginWestagram">
          <Link to="/main">Westagram</Link>
        </span>
        <input
          className="idInput"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
          value={idvalue || ""}
          onChange={handleIdInput}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="비밀번호"
          value={passwordvalue || ""}
          onChange={handlePasswordInput}
        />
        <input
          type="button"
          className="loginButton"
          value="로그인"
          onClick={goToMain}
          style={{ backgroundColor: valueTrue }}
          disabled={trueDisabled}
        />
        <span className="findPassword">비밀번호를 잊으셨나요?</span>
      </section>
    </div>
  );
}

export default Login;

// const navigate = useNavigate();
//   const goToMain = () => {
//     navigate("/main");
//   };
//   const [valueTrue, setValueTrue] = useState("rgb(162, 224, 255)");
//   //const [trueDisabled, setTrueDisabled] = useState(true);
//   const [idvalue, setIdvlaue] = useState("");
//   const handleIdInput = (event) => {
//     //console.log(event.target.value);
//     setIdvlaue(event.target.value);
//     let emailSearch = idvalue.indexOf("@");
//     let fiveLength = passwordvalue.length;
//     //console.log(emailSearch !== -1);
//     //console.log(emailSearch);
//     //console.log(emailSearch !== -1); //결과 fales -1 true 0
//     if (emailSearch !== -1 && fiveLength > 5) {
//       setValueTrue("blue");
//       // setTrueDisabled(false);
//       //loginButton.disabled = false;
//       //console.log(typeof(secondResult));결과 string
//     } else {
//       setValueTrue("rgb(162, 224, 255)");
//       // setTrueDisabled(false);
//       //loginButton.disabled = true;
//     }
//   };
//   const [passwordvalue, setPasswordvalue] = useState("");
//   const handlePasswordInput = (event) => {
//     //console.log(event.target.value);
//     setPasswordvalue(event.target.value);
//   };
// return (
//   <div className="login">
//     <section className="wrapper">
//       <span className="loginWestagram">
//         <Link to="/main">Westagram</Link>
//       </span>
//       <input
//         className="idInput"
//         type="text"
//         placeholder="전화번호,사용자 이름 또는 이메일"
//         value={idvalue || ""}
//         onChange={handleIdInput}
//       />
//       <input
//         className="passwordInput"
//         type="password"
//         placeholder="비밀번호"
//         value={passwordvalue || ""}
//         onChange={handlePasswordInput}
//       />
//       <input
//         type="button"
//         className="loginButton"
//         value="로그인"
//         onClick={goToMain}
//         style={{ backgroundColor: valueTrue }}
//         // disabled={trueDisabled}
//       />
//       <span className="findPassword">비밀번호를 잊으셨나요?</span>
//     </section>
//   </div>
// );
