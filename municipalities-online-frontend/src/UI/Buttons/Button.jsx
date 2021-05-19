import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${className} ${classes.Button}`} onClick={onClick}>
      <h4>{children}</h4>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Button;
