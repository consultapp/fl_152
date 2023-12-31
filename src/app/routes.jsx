import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter.jsx";
import { Home } from "../pages/home/index.jsx";
import { Portfolio } from "../pages/portfolio/index.jsx";
import { ContactUs } from "../pages/contact/index.jsx";
import { About } from "../pages/about/index.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
