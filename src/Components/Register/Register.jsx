import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const [handleError, setHandleError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setHandleError("");

    const uppercaseRegex = /^(?=.*[A-Z])/;
    const specialCharRegex = /^(?=.*[@$!%*?&])/;
    const lengthRegex = /^.{6,}$/;

    const isPasswordValid =
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      lengthRegex.test(password);

    if (!isPasswordValid) {
      setHandleError(
        "Password should have 6 characters, an uppercase letter, and a special character"
      );
      return;
    }

    signUp(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("updated"))
          .catch((error) => console.log(error));

          Swal.fire(
            'Successful!',
            'Registration done!',
            'success'
          )
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Register <span className="text-amber-400">now!</span>
          </h1>
        </div>
        <div className="card p-8 mt-5 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>

            <div className="mt-2">
              <p className="text-center">
                <span className="mr-2">Already have an account?</span>
                <Link className="text-blue-900 text-lg font-bold" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <p className="text-red-500 text-center font-semibold">
              {handleError}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
