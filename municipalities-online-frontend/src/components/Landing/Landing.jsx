
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import classes from './Landing.module.scss';
import Button from '../../UI/Buttons/Button';
import LangingAuthWindow from './LangingAuthWindow/LangingAuthWindow';

const Landing = () => {
  return (
    <section className={classes.Landing}>
      <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <LangingAuthWindow />
      </div>
    </section>
  );
};

Landing.propTypes = {
  // t: PropTypes.func
};

export default Landing;
