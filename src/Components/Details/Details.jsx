import { useParams } from "react-router-dom";
import { FaDollarSign, FaCar } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://automative-server-1xztbl6tl-raians-projects.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const brandCar = cars.find((car) => car._id === id);
  console.log(brandCar);

  const handleCart = () => {
    fetch(
      "https://automative-server-1xztbl6tl-raians-projects.vercel.app/carts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brandCar),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Success!", "Your login successful", "success");
        }
      });
  };

  return (
    <div className="flex mt-10 justify-center">
      {brandCar ? (
        <div className="card md:w-2/3 bg-base-100 shadow-xl">
          <figure>
            <img src={brandCar.image} alt="Cars" />
          </figure>
          <div className="card-body space-y-4">
            <h2 className="card-title">
              <span className="text-2xl font-bold">{brandCar.brand}</span>
              <div className="badge p-4 font-bold text-xl text-white badge-primary">
                {brandCar.name}
              </div>
            </h2>
            <p className="font-semibold text-xl">
              {brandCar.description}.If you want to buy it or planning to buy it
              add this to cart below and fix your date when to come.
            </p>
            <div className="card-actions">
              <div className="badge text-2xl p-4 font-bold badge-outline">
                <span>
                  <FaDollarSign></FaDollarSign>
                </span>
                {brandCar.price}
              </div>
              <div className="badge flex items-center badge-outline text-2xl p-4 font-bold">
                <span className="mr-2">
                  <FaCar></FaCar>
                </span>
                {brandCar.type}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={handleCart} className="btn btn-accent w-2/3">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p><span className="loading loading-spinner loading-lg"></span></p>
      )}
    </div>
  );
};

export default Details;
