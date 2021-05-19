import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { deleteAlert } from '../../redux/actions/alert';

const Alert = ({ t, alerts, deleteAlert }) => {
  console.log('Alerts', alerts);

  return (
    <>
      {alerts !== null && alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} style={{ marginTop: '1rem' }}>
            <div className={`alert alert-${alert.alertType} alert-dismissible fade show`} role='alert'>
              <strong>{alert.title}</strong> {alert.msg}
              <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close' onClick={()=>deleteAlert(alert.id)}></button>
            </div>
          </div>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

Alert.propTypes = {
  t: PropTypes.func,
  alerts: PropTypes.array.isRequired,
  deleteAlert: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {deleteAlert})(withTranslation()(Alert));
