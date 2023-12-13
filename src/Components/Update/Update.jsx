import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  console.log(id);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(
      "https://automative-server-jz31j4cxc-raians-projects.vercel.app//cars"
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const brandCar = cars.find((car) => car._id === id);
  console.log(cars);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const user = { image, name, brand, type, price, rating };
    console.log(user);

    form.reset();
    fetch(
      `https://automative-server-jz31j4cxc-raians-projects.vercel.app/cars/${brandCar._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Your login successful", "success");
        }
      });
  };
  return (
    <div>
      {brandCar ? (
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center">
            Products <span className="text-amber-400">Update</span>
          </h2>
          <form
            onSubmit={handleUpdate}
            className="mt-10 space-y-8 bg-gray-200 p-10"
          >
            <input
              type="text"
              defaultValue={brandCar.image}
              name="image"
              placeholder="ImageURL"
              className="input input-bordered w-1/2"
            />
            <input
              type="text"
              defaultValue={brandCar.name}
              name="name"
              placeholder="Name"
              className="input input-bordered w-1/2"
            />
            <br />
            <input
              type="text"
              name="brand"
              defaultValue={brandCar.brand}
              placeholder="Brand Name"
              className="input input-bordered w-1/2"
            />
            <input
              type="text"
              name="type"
              defaultValue={brandCar.type}
              placeholder="Type"
              className="input input-bordered w-1/2"
            />
            <br />
            <input
              type="text"
              name="price"
              defaultValue={brandCar.price}
              placeholder="Price"
              className="input input-bordered w-1/2"
            />
            <input
              type="text"
              name="rating"
              defaultValue={brandCar.rating}
              placeholder="Rating"
              className="input input-bordered w-1/2"
            />
            <br />

            <br />
            <div className="flex justify-center">
              <input
                className="btn btn-neutral w-2/3"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <p>
          <span className="loading loading-spinner loading-lg"></span>
        </p>
      )}
    </div>
  );
};

export default Update;
