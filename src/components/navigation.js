import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default props => (
  <nav className="navigation">
    <Link to="/wedding">Hôn lễ</Link>
    <Link to="/contact">Liên Hệ</Link>
    <ThemeChanger />
  </nav>
);
