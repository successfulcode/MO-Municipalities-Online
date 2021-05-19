import classes from './ErrorIndicator.module.scss';
import icon from './../../assets/error_image.png';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ErrorIndicator = ({ t }) => {
  return (
    <div className={classes.ErrorIndicator}>
      <img src={icon} alt="error_image" />
      <span>{t('components.errorIndicator.sometingHappened')}!</span>
      <span>{t('components.errorIndicator.sorry')}...</span>
    </div>
  );
};

ErrorIndicator.propTypes = {
  t: PropTypes.string.isRequired
};

export default withTranslation()(ErrorIndicator);
