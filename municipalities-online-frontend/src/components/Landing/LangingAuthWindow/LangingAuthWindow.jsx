import PropTypes from 'prop-types';
import classes from './LangingAuthWindow.module.scss';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Button from '../../../UI/Buttons/Button';
import gov_logo from '../../../assets/gov_logo.png';
import LanguageDropdown from '../../LanguageDropdown/LanguageDropdown';

const LangingAuthWindow = ({ t }) => {
  return (
    <div className={classes.LangingAuthWindow}>
      <div>
        <div style={{textAlign: 'right', padding: '.5rem'}}>
            <LanguageDropdown />
        </div>
        <div>
          <img src={gov_logo} alt='' />
        </div>
        <h3>{t('components.Landing.LangingAuthWindow.greetings')}</h3>
      </div>

      <div>
        <Link to='/login'>
          <Button className='btn btn-primary'>
            <i className='fas fa-sign-in-alt' /> {t('common.login')}
          </Button>
        </Link>
      </div>
      <div style={{ padding: '.5rem 1rem' }}>
        <hr />
      </div>
      <div>
        <Link to='/signUp'>
          <Button className='btn btn-secondary'>
            <i className='fas fa-user-plus' /> {t('common.signUp')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

LangingAuthWindow.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(LangingAuthWindow);
