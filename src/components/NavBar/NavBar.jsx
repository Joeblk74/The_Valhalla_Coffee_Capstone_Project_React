import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css";


function NavBar() {
    return (
      <container >
       <div className="nav-container">
        <nav className="nav">
         <Link to="/">
          <Button className="nav-button" variant="primary">Home</Button>
         </Link>
         <Link to="/login">
          <Button className="nav-button" variant="primary">Login</Button>
         </Link>
         <Link to="/register">
          <Button className="nav-button" variant="primary">Register</Button>
         </Link>
         <Link to="/coffee">
          <Button className="nav-button" variant="primary">Coffee</Button>
         </Link>
         <Link to="/subscribe">
          <Button className="nav-button" variant="primary">Subscribe</Button>
         </Link>
         <Link to="/shoppingcart">
          <Button className="nav-button" variant="primary">Shopping Cart</Button>
         </Link>
        </nav>
       </div>
      </container>
    );
   }
   export default NavBar;