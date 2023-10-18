import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div>
            <h2 className="text-2xl font-bold">404 Error</h2>
            <Link to="/"><button className="btn btn-neutral">Go to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;