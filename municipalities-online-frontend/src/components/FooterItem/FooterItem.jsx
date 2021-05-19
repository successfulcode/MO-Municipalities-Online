import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

const FooterItem = ({ t }) => {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginBottom: '3rem' }}>
      <hr />
      <p>
        {t('components.FooterItem.copyright')} <a href='mailto: sergej.mickevic@gmail.com'>Sergej Mickevič</a>
      </p>
    </div>
  );
};

FooterItem.prototype = {
  t: PropTypes.func
};

export default withTranslation()(FooterItem);
