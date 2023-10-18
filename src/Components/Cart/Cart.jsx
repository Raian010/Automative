import { useEffect, useState } from "react";
import { FaCar, FaDollarSign } from "react-icons/fa";

const Cart = () => {
    const [carts,setCarts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/carts')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div>
            <h2>{carts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    carts.map(cart => <div key={cart._id} className="card bg-base-100 shadow-xl">
                    <figure><img className="h-[350px]" src={cart.image} alt="Cars" /></figure>
                    <div className="card-body space-y-4">
                      <h2 className="card-title">
                        <span className="text-2xl font-bold">{cart.brand}</span>
                        <div className="badge p-4 font-bold text-xl text-white badge-primary">{cart.name}</div>
                      </h2>
                      <p className="font-semibold text-xl">{cart.description}.If you want to buy it or planning to buy it add this to cart below and fix your date when to come.</p>
                      <div className="card-actions">
                        <div className="badge text-2xl p-4 font-bold badge-outline"><span><FaDollarSign></FaDollarSign></span>{cart.price}</div> 
                        <div className="badge flex items-center badge-outline text-2xl p-4 font-bold"><span className="mr-2"><FaCar></FaCar></span>{cart.type}</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button className="btn btn-accent w-2/3">Delete from Cart</button>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Cart;