import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1>Something went wrong</h1>
            <Link to={`/`}>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;