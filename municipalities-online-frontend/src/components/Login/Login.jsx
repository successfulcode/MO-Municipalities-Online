import PropTypes from 'prop-types';
import classes from './Login.module.scss';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../UI/Buttons/Button';
import { withTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';

const Login = ({ t, login, isAuthenticated }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const changeData = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  let errorTitle = t('components.Login.errorTitle');
  let errorMessage = t('components.Login.errorMesage');

  const submitHandler = (e) => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      e.preventDefault();
      setOpenAlert(true);
    } else {
      e.preventDefault();
      login({ email, password, errorTitle, errorMessage });
      setFormData({ email: '', password: '' });
    }
  };

  useEffect(() => {
    if (openAlert) {
      setTimeout(() => setOpenAlert(false), 5000);
    }
  }, [openAlert]);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  console.log('isAuthenticated', isAuthenticated);

  return (
    <div className={classes.Login}>
      <form onSubmit={submitHandler}>
        <h2>{t('common.login')}</h2>
        <div>
          <input value={email} name='email' type='email' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.Login.email')} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <input value={password} name='password' type='password' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.Login.password')} />
        </div>
        <div>
          <Button className='btn btn-primary'>
            {t('common.login')} <i className='fas fa-sign-in-alt' />
          </Button>
        </div>
        <div>
          {t('components.Login.dontHaveAnAccount')}{' '}
          <Link to='/SignUp'>
            <span>
              <i className='fas fa-user-plus' /> {t('common.signUp')}
            </span>
          </Link>
        </div>
        <Link to='/'>
          <i className='fas fa-angle-double-left' /> {t('components.Login.back')}
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
  t: PropTypes.func,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { login })(withTranslation()(Login));
