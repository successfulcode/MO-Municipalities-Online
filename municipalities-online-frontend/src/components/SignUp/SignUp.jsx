import PropTypes from 'prop-types';
import classes from './SignUp.module.scss';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../UI/Buttons/Button';
import { withTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Alert from '../Alert/Alert';
import { register } from '../../redux/actions/auth';
import { connect } from 'react-redux';

const SignUp = ({ t, register, isAuthenticated }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
  const { name, email, password, password2 } = formData;
  const changeData = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    if (email.trim().length === 0 || password.trim().length === 0 || password2.trim().length === 0 || name.trim().length === 0) {
      e.preventDefault();
      setOpenAlert(true);
    } else if (password.trim().length !== password2.trim().length) {
      e.preventDefault();
      setOpenAlert(true);
    } else {
      e.preventDefault();
      register({ name, email, password });
      setFormData({ name: '', email: '', password: '', password2: '' });
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

  return (
    <div>
      {openAlert && (
        <Alert onCloseHandler={() => setOpenAlert(false)} title={t('common.error')}>
          {t('components.Login.errorMesage')}
        </Alert>
      )}
      <div className={classes.SignUp}>
        <form onSubmit={submitHandler}>
          <h2>{t('common.signUp')}</h2>
          <div>
            <input value={name} name='name' type='text' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.SignUp.name')} />
          </div>
          <div>
            <input value={email} name='email' type='email' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.Login.email')} />
          </div>
          <div>
            <input value={password} name='password' type='password' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.Login.password')} />
          </div>
          <div>
            <input value={password2} name='password2' type='password' className={openAlert ? 'form-control is-invalid' : 'form-control'} onChange={(e) => changeData(e)} placeholder={t('components.SignUp.confirmPassword')} />
          </div>
          <div>
            <Button className='btn btn-secondary'>
              {t('common.signUp')} <i className='fas fa-user-plus' />
            </Button>
          </div>
          <div>
            {t('components.SignUp.alreadyHaveAnAccount')}{' '}
            <Link to='/Login'>
              <span>{t('common.login')}</span>
            </Link>
          </div>
          <div>
            <Link to='/'>
              <i className='fas fa-angle-double-left' /> {t('components.Login.back')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

SignUp.propTypes = {
  t: PropTypes.func,
  register: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { register })(withTranslation()(SignUp));
