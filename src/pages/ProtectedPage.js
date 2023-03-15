import { Navigate } from "react-router-dom";

export const ProtectedPage = () => {
    const approvedUser = false;
    return approvedUser ? (
        <h1>You have been authorized to see this meaningless heading...</h1>
    ) : (
        <Navigate to="/" />
    );
}