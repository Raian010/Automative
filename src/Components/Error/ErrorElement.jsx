import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="space-y-4 text-center">
                
            <h2 className="text-5xl font-bold">404 Error</h2>
            <h2 className="text-3xl text-center font-semibold">There is no data</h2>
            <Link to="/"><button className="mt-4 btn btn-neutral">Go to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;