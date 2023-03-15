import { Navigate } from "react-router-dom";
// following new version cues from prof...

export const ProtectedPage = () => {
    // code following prof...
    const approvedUser = false;
    return approvedUser ? (
        <h1>You have been authorized to see this meaningless heading...</h1>
    ) : (
        <Navigate to="/" />
    );
}