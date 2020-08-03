import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../../components/app";
import "./styles/styles.css";
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}


ReactDOM.render(<App name={"inedex"} />, document.querySelector("#root"));