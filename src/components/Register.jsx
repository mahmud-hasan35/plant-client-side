import React, { use} from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast} from 'react-toastify';


export default function Register() {

  const {signUp} = use(AuthContext)

const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

  
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  if (password.length < 6 || !hasUpperCase || !hasLowerCase) {
    toast.error("Password must be at least 6 characters and include both uppercase and lowercase letters.");
    return;
  }

  signUp(email, password)
    .then((result) => {
      console.log("Registered:", result.user);
      toast.success("Registration successful!");
      navigate(from, { replace: true });
    })
    .catch((error) => {
      toast.error("Registration failed!");
      console.error("Registration error:", error);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Register</h2>
        
        <form onSubmit={handleSignUp} className="flex flex-col gap-4 items-center">
          <div className="form-control w-full max-w-xs">
            <label htmlFor="name" className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your name" className="input input-bordered text-center" required />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="email" className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" name="email" placeholder="Your email" className="input input-bordered text-center" required />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="photo" className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Your photo URL" className="input input-bordered text-center" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="password" className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered text-center" required />
          </div>

          <div className="form-control mt-4 w-full max-w-xs">
            <button type='submit' className="btn btn-primary w-full">Register</button>
          </div>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>

    </div>
  );
}
