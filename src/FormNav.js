import { Link } from "react-router-dom";

export const FormNav = () => (
    <ul>
        <li>
            <Link to='/forms/control'>I Will Submit</Link>
        </li>
        <li>
            <Link to='/forms/chaos'>Chaos Form</Link>
        </li>
    </ul>
)