import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext)

  const location = useLocation()
 


  if (loading) {
    return <>

    <div className='text-center text-white'>

      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>;
      <span className="loading loading-dots loading-xl"></span>
    </div>
      </>

  }

  if (user && user?.email) {
    return children
  }
  else { return <Navigate state={location.pathname} to={"/login"}></Navigate> }


}
