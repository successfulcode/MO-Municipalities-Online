import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PrivateRoutes = ({component: Component, auth: { isAuthenticated, loading }, ...rest }) => (
  <Route {...rest} render = {props => !isAuthenticated && !loading ? <Redirect to='/auth' /> : (<Component {...props}/>)} />
)

const mapStateToProps = state => ({
  auth: state.auth
})

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps) (PrivateRoutes);
