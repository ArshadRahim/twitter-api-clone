import { newElement } from "../Twitter/index";
import { Start } from "./start";
import { Signup } from "./sign-up";
import { Login } from "./login";
import { Home } from "./home"

import "../styles/style.css";

export const Layout = () => {
  if (location.pathname === "/") {
    return Home();
  } else if (location.pathname === "/sign-up") {
    return Signup();
  } else if (location.pathname === "/login") {
    return Login();
  }
  else if (location.pathname === "/home") {
    return Home();
  }
};
