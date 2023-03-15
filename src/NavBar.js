import { Link } from "react-router-dom";

export const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Take Me Home</Link>
        </li>
        <li>
            <Link to="/counter">Counter Page</Link>
        </li>
        <li>
            <Link to="/personnel-list">Personnel Page</Link>
        </li>
        <li>
            <Link to="/forms">Our Forms</Link>
        </li>
    </ul>
)

        
        
        
        