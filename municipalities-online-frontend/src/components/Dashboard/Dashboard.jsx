import PropTypes from 'prop-types';
import classes from './Dashboard.module.scss';
import { useEffect } from 'react';
import DashboardActions from './DashboardActions/DashboardActions';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteExperience } from '../../redux/actions/profile';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EducationInfo from './EducationInfo/EducationInfo';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo';

const Dashboard = ({ t, getCurrentProfile, auth: { user }, profile: { profile, loading }, deleteExperience }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <div className={classes.Dashboard}>
      <div>
        <h1>{t('common.dashboard')}</h1>
        <h4>
          <i className='fas fa-user text-primary' /> Welcome {user && user.name}
        </h4>
      </div>
      <DashboardActions profile={profile} />
      {profile !== null ? (
        <>
          <EducationInfo education={profile.education} />
          <ExperienceInfo experience={profile.experience} deleteExperience={deleteExperience} />
        </>
      ) : (
        <>
          <p>
            You have not yet setup a pofile, please add some info <Link to='/create-profile'>Create Profile</Link>
          </p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

Dashboard.propTypes = {
  t: PropTypes.func,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getCurrentProfile, deleteExperience })(withTranslation()(Dashboard));
