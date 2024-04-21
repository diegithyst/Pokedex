import { Link, Outlet } from "react-router-dom";


export default function Header(){
    return(
        <>
        <nav class="navbar">
        <ul class="navbar-nav" style={{listStyle: "none", padding: 0 }}>
        <li class="nav-item" style={{ display: "inline-block", marginRight: "10px" }}>
        <Link to="/">My Home</Link>
        </li>
        <li class="nav-item" style={{ display: "inline-block" }}>
        <Link to="/about">About</Link>
        </li>
        </ul>
        </nav>           
        <Outlet/>
        </>
    );
}