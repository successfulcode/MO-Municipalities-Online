import { useState } from 'react';
import classes from '../CreateProfile/CreateProfile.module.scss';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createProfile } from '../../../redux/actions/profile';
import Button from '../../../UI/Buttons/Button';
import { Link } from 'react-router-dom';

const CreateProfile = ({ t, createProfile, history }) => {
  const [formData, setFormData] = useState({
    municipality: '',
    municipalWebsite: '',
    location: '',
    status: '',
    skills: '',
    partyAffiliation: '',
    partyName: '',
    about: '',
    youtube: '',
    twittter: '',
    facebook: '',
    instagram: ''
  });

  const { municipality, municipalWebsite, location, status, skills, partyAffiliation, partyName, about, youtube, twittter, facebook, instagram } = formData;

  const [toggleAddSocialMedia, setToggleAddSocialMedia] = useState(false);

  const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  const onClearFormHandler = (e) => {
    e.preventDefault();
    setFormData({
      municipality: '',
      municipalWebsite: '',
      location: '',
      status: '',
      skills: '',
      partyAffiliation: '',
      partyName: '',
      about: '',
      youtube: '',
      twittter: '',
      facebook: '',
      instagram: ''
    });
  };

  return (
    <div className={classes.CreateProfile}>
      <div className={classes.formDiv}>
        <form onSubmit={onSubmitHandler}>
          <div style={{ marginBottom: '1rem' }}>
            <h2>
              <i className='far fa-user-circle' /> {t('components.ProfileForms.CreateProfile.createYourProfile')}
            </h2>
            <p>{t('components.ProfileForms.CreateProfile.someInformation')}</p>
            <small>{t('components.ProfileForms.CreateProfile.requiredField')}</small>
          </div>
          <input value={municipality} className='form-control' name='municipality' type='text' placeholder={`${t('common.required')} ${t('components.ProfileForms.CreateProfile.municipality')}`} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={municipalWebsite} className='form-control' name='municipalWebsite' type='text' placeholder={`${t('common.required')} ${t('components.ProfileForms.CreateProfile.municipalWebsite')}`} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={location} className='form-control' name='location' type='text' placeholder={t('components.ProfileForms.CreateProfile.location')} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={status} className='form-control' name='status' type='text' placeholder={`${t('common.required')} ${t('components.ProfileForms.CreateProfile.status')}`} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={skills} className='form-control' name='skills' type='text' placeholder={t('components.ProfileForms.CreateProfile.skills')} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={partyAffiliation} className='form-control' name='partyAffiliation' placeholder={t('components.ProfileForms.CreateProfile.partyAffiliation')} type='text' onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <input value={partyName} className='form-control' name='partyName' type='text' placeholder={t('components.ProfileForms.CreateProfile.partyName')} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <textarea cols='30' rows='3' value={about} className='form-control' name='about' type='text' placeholder={t('components.ProfileForms.CreateProfile.about')} onChange={(e) => onChangeHandler(e)} />
          <small className='form-text'>Could be your own company or one you work for</small>
          <div>
            <button className={`${toggleAddSocialMedia ? 'btn btn-outline-danger' : 'btn btn-outline-primary'} ${classes.socialMediaButton}`} onClick={(e) =>{ e.preventDefault(); setToggleAddSocialMedia(!toggleAddSocialMedia)}}>
              {toggleAddSocialMedia ? `${t('components.ProfileForms.CreateProfile.hideSocialMedia')}` : `${t('components.ProfileForms.CreateProfile.addSocialMedia')}`}
            </button>
          </div>
          {toggleAddSocialMedia && (
            <div>
              <div>
                <div className={classes.aligIcons}>
                  <i className={`fab fa-facebook fa-2x ${classes.icons}`} />
                </div>
                <input value={facebook} className='form-control' name='facebook' type='text' placeholder='Facebook' onChange={(e) => onChangeHandler(e)} />
              </div>
              <div>
                <div className={classes.aligIcons}>
                  <i className={`fab fa-instagram fa-2x ${classes.icons}`} />
                </div>
                <input value={instagram} className='form-control' name='instagram' type='text' placeholder='Instagram' onChange={(e) => onChangeHandler(e)} />
              </div>
              <div>
                <div className={classes.aligIcons}>
                  <i className={`fab fa-twitter fa-2x ${classes.icons}`} />
                </div>
                <input value={twittter} className='form-control' name='twittter' type='text' placeholder='Twittter' onChange={(e) => onChangeHandler(e)} />
              </div>
              <div>
                <div className={classes.aligIcons}>
                  <i className={`fab fa-youtube fa-2x ${classes.icons}`} />
                </div>
                <input value={youtube} className='form-control' name='youtube' type='text' placeholder='YouTube' onChange={(e) => onChangeHandler(e)} />
              </div>
            </div>
          )}
          <div className={classes.buttonsDiv}>
            <Button className='btn btn-success'>
              {t('common.confirm')} <i className='far fa-check-circle' />
            </Button>
            <Button className='btn btn-secondary' onClick={(e) => onClearFormHandler(e)}>
              {t('common.cancel')} <i className='fas fa-ban' />
            </Button>
          </div>
          <div className={classes.buttonsDiv}>
            <Link  to='/dashboard'>
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

CreateProfile.propTypes = {
  t: PropTypes.func,
  createProfile: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { createProfile })(withTranslation()(withRouter(CreateProfile)));
