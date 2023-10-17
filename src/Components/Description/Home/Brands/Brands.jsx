const Brands = () => {
  return (
    <div>
      <h2 className="text-center mt-10 font-bold text-5xl">Car Brands</h2>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/L5zfrJ71/images-8.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">Tesla</h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/43q9yvRc/images-7.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">Mercedes-Benz</h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/jdtJDdmM/images-6.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">BMW</h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/vBrgHc7L/download-0.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">Ford Mustang</h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/pTBR4xCd/download.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">Honda</h2>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[275px]"
              src="https://i.postimg.cc/FFkCGmrb/images-9.jpg"
            ></img>
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-semibold">Toyota</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
