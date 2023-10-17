import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[87vh] mt-5"
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/sgKNWqvW/360-F-308445331-ZZinys-Rse5x-OZac-NTno-Qq-G24-TAy7ft-Z5.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">This is Our Cars Kingdom</h1>
          <p className="mb-5">
            Over 1 million+ buyers from all over the world and growing.If you are a car lover and like vintage to modern cars you can just explore our page.We are here with vintage to modern cars.
          </p>
          <Link to="/description"><button className="btn btn-primary">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
