import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate, useLocation } from 'react-router';

export default function Login() {
  const { signIn, loading, setLoading, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Google login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

  <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">
    <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Login</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="form-control">
        <label htmlFor="email" className="label font-semibold mb-1 text-base text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="password" className="label font-semibold mb-1 text-base text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered w-full"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary mt-2"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>

    <div className="divider">OR</div>

    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="btn btn-outline btn-success w-full"
    >
      {loading ? "Processing..." : "Login with Google"}
    </button>

    <p className="text-center mt-4 text-sm">
      Don't have an account?{" "}
      <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
    </p>
  </div>
</div>

  );
}
