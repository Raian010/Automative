import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaDollarSign,FaCar } from 'react-icons/fa'; 

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const BrandProducts = () => {
  const { brand } = useParams();
  console.log(brand);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const brandCars = cars.filter((car) => car.brand === brand);
  console.log(brandCars);

  return (
    <div>
      <h3>There is {cars.length} </h3>
      {/* <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
  </div>
</div> */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {brandCars.map((car) => (
          <div key={car._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={car.image} alt="Cars" />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="text-center text-4xl font-bold">{car.brand}</h2>
              <h2 className="text-xl mt-4 font-bold">Model- <span className="text-2xl">{car.name}</span></h2>
             <div className="flex justify-between items-center">
             <p className="text-2xl font-semibold flex  items-center"><span><FaDollarSign></FaDollarSign></span>{car.price}</p>
              <p className="text-2xl font-semibold flex items-center"><span className="mr-2"><FaCar></FaCar></span>{car.type}</p>
             </div>
              <div className="flex justify-around">
              <p className="text-2xl flex font-semibold">
                <span className="mr-2">Rating-</span><ReactStars
                  count={parseFloat(car.rating)}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                </p>
                <button className="btn btn-primary">Details</button>
              </div>
              <div className="flex justify-between">
                
                <button className="btn btn-accent w-full">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
