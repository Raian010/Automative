import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaDollarSign, FaCar } from "react-icons/fa";

const BrandProducts = () => {
  const { brand } = useParams();
  console.log(brand);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://automative-server-jz31j4cxc-raians-projects.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const brandCars = cars.filter((car) => car.brand === brand);
  console.log(brandCars);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  const product = products.find((produc) => produc.brand == brand);
  console.log(product);

  const [searchCars, setSearchCars] = useState("");
  const filteredBrandCars = brandCars.filter(
    (car) =>
      car.brand.toLowerCase().includes(searchCars.toLowerCase()) ||
      car.name.toLowerCase().includes(searchCars.toLowerCase())
  );

  return (
    <div>
      {product ? (
        <div className="carousel h-[70vh] w-[2/3]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={product.image1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={product.image2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={product.image3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      ) : (
        "No carousal"
      )}

      <div>
        {filteredBrandCars.length > 0 ? (
          <div>
            <h2 className="text-4xl font-bold text-amber-400 text-center mt-5 mb-5">
              Products
            </h2>
            <input
            className="my-10 input border-1 border-black input-bordered"
              type="text"
              placeholder="Search By Model"
              value={searchCars}
              onChange={(e) => setSearchCars(e.target.value)}
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredBrandCars.map((car) => (
                <div key={car._id} className="card bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="h-[340px] w-full"
                      src={car.image}
                      alt="Cars"
                    />
                  </figure>
                  <div className="card-body space-y-3">
                    <h2 className="text-center text-4xl font-bold">
                      {car.brand}
                    </h2>
                    <h2 className="text-xl mt-4 font-bold">
                      Model- <span className="text-2xl">{car.name}</span>
                    </h2>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-semibold flex  items-center">
                        <span>
                          <FaDollarSign></FaDollarSign>
                        </span>
                        {car.price}
                      </p>
                      <p className="text-2xl font-semibold flex items-center">
                        <span className="mr-2">
                          <FaCar></FaCar>
                        </span>
                        {car.type}
                      </p>
                    </div>
                    <div className="flex justify-around">
                      <p className="text-2xl flex font-semibold">
                        <span className="mr-2">Rating-</span>
                        {car.rating}/5
                      </p>
                      <Link to={`/details/${car._id}`}>
                        <button className="btn btn-primary">Details</button>
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <Link
                        className="btn btn-accent w-full"
                        to={`/update/${car._id}`}
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="text-2xl font-bold text-center">
              There is no products for now.
              <br />
              You will get an update when we are available for products.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandProducts;
