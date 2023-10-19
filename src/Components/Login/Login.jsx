import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";


const Login = () => {
    const {signIn, googleSIgn} = useContext(AuthContext);
    const [signinError,setSigninError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    
    const googleSignin = () => {
          googleSIgn()
          .then(result => {
            console.log(result.user);
          })
          .catch(error => {
            console.log(error);
          })
    }

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setSigninError("");

        signIn(email,password)
        .then(result => {
            console.log(result.user)
            Swal.fire(
              'Success!',
              'Your login successful',
              'success'
            )
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.log(error.message);
            setSigninError(error.message)
        })
    }

    return (
        <div>
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login <span className="text-amber-400">now!</span></h1>
      
    </div>
    <div className="card p-8 mt-5 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
      <form onSubmit={handleSignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="mt-2">
            <p className="text-center">
              <span className="mr-2">Do not have an account?</span>
              <Link className="text-blue-900 text-lg font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
          <p className="m-2 text-center">OR</p>
          <div>
            <p className="text-center">
              <span className="mr-2">You can also sign in by</span>
              <span>
                <button className="bg-white text-blue-500 text-lg  font-bold rounded px-2 py-1 " onClick={googleSignin}>
                  Google
                </button>
              </span>
            </p>
          </div>
          <p className="text-red-500 text-center font-semibold">
              {signinError}
            </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;