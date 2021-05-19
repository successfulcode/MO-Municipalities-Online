import { Route, Switch } from 'react-router';
import Alert from '../components/Alert/Alert';
import Landing from '../components/Landing/Landing';
import Login from '../components/Login/Login';
import CreateProfile from '../components/ProfileForms/CreateProfile/CreateProfile';
import Profiles from '../components/Profiles/Profiles';
import SignUp from '../components/SignUp/SignUp';
import Dashboard from '../components/Dashboard/Dashboard';
import PrivateRoutes from './PrivateRoutes';
import AddEducation from '../components/ProfileForms/AddEducation/AddEducation';
import AddExperience from '../components/ProfileForms/AddExperience/AddExperience';
import EditProfile from '../components/ProfileForms/EditProfile/EditProfile';

const Routes = () => {
  return (
    <>
      <Alert />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/auth' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/profile' component={Profiles} />
        <PrivateRoutes exact path='/create-profile' component={CreateProfile} />
        <PrivateRoutes exact path='/edit-profile' component={EditProfile} />
        <PrivateRoutes exact path='/add-education' component={AddEducation} />
        <PrivateRoutes exact path='/add-experience' component={AddExperience} />
        <PrivateRoutes exact path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  );
};

export default Routes;
