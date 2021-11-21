import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css";

function NavBar({ user, loggedOutUser }) {
  return (
    // <NavBar bg="dark"variant="light">
      <div className="nav-container">
        <h1>Valhalla Coffee Company</h1>
        <nav className="navbar">
          <Link to="/">
            <Button className="nav-button" variant="primary">
              Home
            </Button>
          </Link>
          {user && user.token ? (
            <>
              <Button
                className="nav-button"
                variant="primary"
                onClick={loggedOutUser}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button className="nav-button" variant="primary">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="nav-button" variant="primary">
                  Register
                </Button>
              </Link>
            </>
          )}
          <Link to="/coffee">
            <Button className="nav-button" variant="primary">
              Coffee
            </Button>
          </Link>
          <Link to="/subscribe">
            <Button className="nav-button" variant="primary">
              Subscribe
            </Button>
          </Link>
          <Link to="/shoppingcart">
            <Button className="nav-button" variant="primary">
              Shopping Cart
            </Button>
          </Link>
        </nav>
      </div>
    // </NavBar>
  );
}
export default NavBar;
