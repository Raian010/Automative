import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands,setBrands] = useState([]);
  useEffect(() => {
    fetch('/brands.json')
    .then(res => res.json())
    .then(data => setBrands(data))
  },[])

  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-5xl">Car <span className="text-amber-400">Brands</span></h2>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          brands.map(brand => <Link key={brand._id} to={`/brandProducts/${brand.name}`}>
          <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src={brand.image}
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">{brand.name}</h2>
          </div>
        </div></Link>)
        }
        
      </div>
    </div>
  );
};

export default Brands;


