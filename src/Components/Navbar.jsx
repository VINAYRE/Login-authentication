import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            React Assignment
          </Link>

          <Link to="/loginC" className="navbar-brand">
            Login
          </Link>
        </nav>
      </>
    );
  }
}
export default Navbar;