import {  useState } from "react";
import { FaCar, FaDollarSign } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const loadedCarts = useLoaderData();
  
  const [carts, setCarts] = useState(loadedCarts);

  console.log(carts);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://automative-server-1xztbl6tl-raians-projects.vercel.app/carts/${_id}`,{
            method:'DELETE'
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = carts.filter((cart) => cart._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {carts.map((cart) => (
          <div key={cart._id} className="card p-3 bg-base-100 shadow-xl">
            <figure>
              <img className="h-[350px]" src={cart.image} alt="Cars" />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="card-title">
                <span className="text-2xl font-bold">{cart.brand}</span>
                <div className="badge p-4 font-bold text-xl text-white badge-primary">
                  {cart.name}
                </div>
              </h2>
              <p className="font-semibold text-xl">
                {cart.description}.If you want to buy it or planning to buy it
                add this to cart below and fix your date when to come.
              </p>
              <div className="card-actions">
                <div className="badge text-2xl p-4 font-bold badge-outline">
                  <span>
                    <FaDollarSign></FaDollarSign>
                  </span>
                  {cart.price}
                </div>
                <div className="badge flex items-center badge-outline text-2xl p-4 font-bold">
                  <span className="mr-2">
                    <FaCar></FaCar>
                  </span>
                  {cart.type}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleDelete(cart._id)}
                className="btn btn-accent w-2/3"
              >
                Delete from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
