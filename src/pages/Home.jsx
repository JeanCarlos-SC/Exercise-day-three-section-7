import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    );
  }
}