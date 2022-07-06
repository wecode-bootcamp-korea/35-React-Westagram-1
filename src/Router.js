import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// 민지's Components
import LoginMinjee from "./pages/minjeeSon/Login/Login";
import MainMinjee from "./pages/minjeeSon/Main/Main";

// 현민's Components
import LoginHyeonmin from "./pages/hyeonminKil/Login/Login";
import MainHyeonmin from "./pages/hyeonminKil/Main/Main";

// 성훈's Components
import LoginSeonghun from "./pages/seonghunEom/Login/Login";
import MainSeonghun from "./pages/seonghunEom/Main/Main";

// 원영's Components
import LoginWonyoung from "./pages/wonyoungJoo/Login/Login";
import MainWonyoung from "./pages/wonyoungJoo/Main/Main";

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login-minjee" element={<LoginMinjee />} />
        <Route path="/main-minjeeSon" element={<MainMinjee />} />
        <Route path="/login-hyeonmin" element={<LoginHyeonmin />} />
        <Route path="/main-hyeonmin" element={<MainHyeonmin />} />
        <Route path="/login-seonghun" element={<LoginSeonghun />} />
        <Route path="/main-seonghun" element={<MainSeonghun />} />
        <Route path="/login-wonyoung" element={<LoginWonyoung />} />
        <Route path="/main-wonyoung" element={<MainWonyoung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
