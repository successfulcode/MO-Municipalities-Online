import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { logout } from '../../redux/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <div>
        <Link to='/profile'>Profile</Link>
      </div>
      <div>
        <Link to='/create-profile'>Create profile</Link>
      </div>
      <div>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div>
        <Link to='/add-education'>Add Education</Link>
      </div>
      <div>
        <Link to='/add-experience'>Add Experience</Link>
      </div>
      <div>
        <Link to='/edit-profile'>Edit profile</Link>
      </div>
    </div>
  );

  const guestLinks = (
    <div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/create-profile'>Sign Up</Link>
      </div>
    </div>
  );

  return (
    <nav
      className='navbar navbar-light'
      style={{
        background: 'radial-gradient(circle, rgba(126,175,233,0.5186449579831933) 0%, rgba(47,24,199,0.4374124649859944) 100%)'
      }}
    >
      <div className='container'>
        <a className='navbar-brand' style={{ color: '#fff', fontFamily: 'Monoton' }}>
          <h2>MO</h2>
        </a>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        <form className='d-flex'>
          <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
          <button className='btn btn-outline-success' onClick={() => alert('button')}>
            Search
          </button>
        </form>
        <div>
          <LanguageDropdown />
        </div>
        <div>
          {isAuthenticated ? (
            <div>logout</div>
          ) : (
            <Link to='/login'>
              <div>login</div>
            </Link>
          )}{' '}
          <button onClick={logout}>{isAuthenticated ? 'Logout' : 'Login'}</button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Navbar);
