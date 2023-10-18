import { useLoaderData } from "react-router-dom";
import { FaDollarSign,FaCar } from 'react-icons/fa'; 
import Swal from "sweetalert2";


const Details = () => {
    const user = useLoaderData();
    console.log(user);
    const {image,name,brand,type,price,description} = user;

    const handleCart = () => {
        fetch('http://localhost:5000/carts',{
            method: "POST",
            headers: {
                "content-type": "application/json" 
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Your login successful',
                    'success'
                  )
            }
        })
    }
    
    return (
        <div className="flex justify-center">
            <div className="card md:w-2/3 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Cars" /></figure>
  <div className="card-body space-y-4">
    <h2 className="card-title">
      <span className="text-2xl font-bold">{brand}</span>
      <div className="badge p-4 font-bold text-xl text-white badge-primary">{name}</div>
    </h2>
    <p className="font-semibold text-xl">{description}.If you want to buy it or planning to buy it add this to cart below and fix your date when to come.</p>
    <div className="card-actions">
      <div className="badge text-2xl p-4 font-bold badge-outline"><span><FaDollarSign></FaDollarSign></span>{price}</div> 
      <div className="badge flex items-center badge-outline text-2xl p-4 font-bold"><span className="mr-2"><FaCar></FaCar></span>{type}</div>
    </div>
  </div>
  <div className="flex justify-center">
    <button onClick={handleCart} className="btn btn-accent w-2/3">Add to Cart</button>
  </div>
</div>
        </div>
    );
};

export default Details;