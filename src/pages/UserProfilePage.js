import { useEffect, useState } from "react";

export const UserProfilePage = () => {
    const [user, setUser] = useState({ name: {} });

    // this is all to use the specific site for dummy data
    // code to use my own stuff will vary slightly
    // dummy functio called from useEffect must be synchronus, but a function call
    // within that sync may be asyc
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            setUser(data.results[0]);
        }

        fetchUser();
    }, []);
    // auto displays dummy data

    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}