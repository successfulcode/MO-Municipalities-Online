import { useEffect } from 'react';
import setAuthToken from '../utils/setAuthToken';
import store from '../store';
import { loadUser } from '../redux/actions/auth';

if(localStorage.token) {
  setAuthToken(localStorage.token)
};

const CheckAuth = ({ children  }) => {

useEffect(() => {
  store.dispatch(loadUser())
}, []);

    return (
        <>
          {children}
        </>
    )
}

export default CheckAuth;
