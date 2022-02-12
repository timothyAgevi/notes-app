import React from "react";
import {Link} from "react-router-dom"
function Navbar(){
 return <nav className="navbar bg-dark container">
     <h4> <Link to="/Home">Home</Link></h4>
     <h4> <Link to="/Notes">Notes</Link></h4>
     <h4> <Link to="/Home">Home</Link></h4>
 </nav>
}
export default Navbar;