import { URL_PATH } from "@util/Constant";
import { Routes, Route } from "react-router-dom";
import About from "@views/Common/About";
import Contact from "@views/Common/Contact";
import Home from "@views/Common/Home";
import Login from "@views/Auth/Login";

const RouterPath = () => {
  return (
    <Routes>
      <Route path={URL_PATH.HOME} element={<Home />} />
      <Route path={URL_PATH.ABOUT} element={<About />} />
      <Route path={URL_PATH.CONTACT} element={<Contact />} />
      <Route path={URL_PATH.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default RouterPath;
