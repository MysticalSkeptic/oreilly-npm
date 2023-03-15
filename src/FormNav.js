import { Link } from "react-router-dom";

export const FormNav = () => (
    <ul>
        <li>
            <Link to='/forms/control-form'>I Will Submit</Link>
        </li>
        <li>
            <Link to='/forms/uncontrol-form'>Chaos Form</Link>
        </li>
    </ul>
)