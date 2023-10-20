import Swal from "sweetalert2";

const Addproduct = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const user = { image, name, brand, type, price, description, rating };
    console.log(user);

    form.reset();
    fetch("https://automative-server-1xztbl6tl-raians-projects.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Success!", "Your login successful", "success");
        }
      });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">
        Products <span className="text-amber-400">Adding</span>
      </h2>
      <form onSubmit={handleForm} className="mt-10 space-y-8 bg-gray-200 p-10">
        <input
          type="text"
          name="image"
          placeholder="ImageURL"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          className="input input-bordered w-2/3"
        />

        <br />
        <div className="flex justify-center">
          <input className="btn btn-neutral w-2/3" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
