import classes from './DashboardActions.module.scss';
import { Link } from 'react-router-dom';

const DashboardActions = ({ profile }) => {
  return (
    <div className={classes.DashboardActions}>
      {profile === null ? (
        <>
          <Link to='/create-profile'>
            <button type='button' className='btn btn-outline-secondary'>
              <i className='fas fa-user-circle text-primary' /> Create Profile
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to='/edit-profile'>
            <button type='button' className='btn btn-outline-secondary'>
              <i className='fas fa-user-circle text-primary' /> Edit Profile
            </button>
          </Link>

          <Link to='/add-experience'>
            <button type='button' className='btn btn-outline-secondary'>
              <i className='fab fa-black-tie text-primary' /> Add Experience
            </button>
          </Link>
          <Link to='/add-education'>
            <button type='button' className='btn btn-outline-secondary'>
              <i className='fas fa-graduation-cap text-primary' /> Add Education
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default DashboardActions;
