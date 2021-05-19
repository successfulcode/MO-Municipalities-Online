import { useState } from 'react';
import classes from '../AddExperience/AddExperience.module.scss';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addExperience } from '../../../redux/actions/profile';
import Button from '../../../UI/Buttons/Button';
import { Link } from 'react-router-dom';

const AddExperience = ({ t, addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  const onClearFormHandler = (e) => {
    e.preventDefault();
    setFormData({
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: ''
    });
  };

  const [toggleDisable, setToggleDisable] = useState(false);

  return (
    <div className={classes.AddExperience}>
      <div className={classes.formDiv}>
        <form onSubmit={onSubmitHandler}>
          <div style={{ marginBottom: '1rem' }}>
            <h2>
              <i className='fab fa-black-tie' /> {t('components.ProfileForms.AddExperience.add')}
            </h2>
            <p>{t('components.ProfileForms.AddExperience.addExperienceDescription')}</p>
            <small>{t('components.ProfileForms.CreateProfile.requiredField')}</small>
          </div>
          
          <input value={company} className='form-control' name='company' type='text' placeholder={`${t('common.required')} ${t('components.ProfileForms.AddExperience.company')}`} onChange={(e) => onChangeHandler(e)} />

          <input value={title} className='form-control' name='title' type='text' placeholder={`${t('common.required')} ${t('components.ProfileForms.AddExperience.title')}`} onChange={(e) => onChangeHandler(e)} />

          <input value={location} className='form-control' name='location' type='text' placeholder={t('components.ProfileForms.AddExperience.location')} onChange={(e) => onChangeHandler(e)} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
              <div style={{ width: '100%', margin: '.5rem .5rem 0 0' }}>
                <h6>{t('components.ProfileForms.AddExperience.fromDate')}</h6>
                <input value={from} style={{ marginTop: '.1rem' }} lang='ru-RU' className='form-control' name='from' type='date' placeholder={'From Date'} onChange={(e) => onChangeHandler(e)} />
              </div>

              <div style={{ width: '100%', marginTop: '.5rem' }}>
                <h6>{t('components.ProfileForms.AddExperience.toDate')}</h6>
                <input value={to} style={{ marginTop: '.1rem' }} className='form-control' name='to' type='date' placeholder={'To Date'} disabled={toggleDisable ? 'disabled' : ''} onChange={(e) => onChangeHandler(e)} />
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p>
                <input
                  type='checkbox'
                  name='current'
                  style={{ zoom: '1.7', marginTop: '.4rem' }}
                  checked={current}
                  value={current}
                  onChange={(e) => {
                    setFormData({ ...formData, current: !current });
                    setToggleDisable(!toggleDisable);
                  }}
                />{' '}
                {t('components.ProfileForms.AddExperience.currentJob')}
              </p>
            </div>
          </div>

          <textarea cols='30' rows='3' value={description} className='form-control' name='description' type='text' placeholder={t('components.ProfileForms.AddExperience.description')} onChange={(e) => onChangeHandler(e)} />

          <div className={classes.buttonsDiv}>
            <Button className='btn btn-success'>
              {t('common.confirm')} <i className='far fa-check-circle' />
            </Button>
            <Button className='btn btn-secondary' onClick={(e) => onClearFormHandler(e)}>
              {t('common.cancel')} <i className='fas fa-ban' />
            </Button>
          </div>
          <div className={classes.buttonsDiv}>
            <Link to='/dashboard'>
              <i className='fas fa-angle-double-left' /> {t('components.Login.back')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

AddExperience.propTypes = {
  t: PropTypes.func,
  addExperience: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { addExperience })(withTranslation()(withRouter(AddExperience)));
