import { useLoaderData } from "react-router-dom";


const Details = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default Details;