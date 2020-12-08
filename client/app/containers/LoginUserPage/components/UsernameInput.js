import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectEmail, makeSelectEmailError } from '../selectors';
import * as mapDispatchToProps from '../actions';

const EmailInput = props => {
  const { email, setStoreValue, errors } = props;
  const handleChange = e =>
    setStoreValue({ key: 'email', value: e.target.value });
  const hasError = Boolean(errors);
  return (
    <div className="mb-4">
      <label className="label" htmlFor="username">
        Email
      </label>
      <input
        // error={hasError.toString()}
        onChange={handleChange}
        value={email}
        className="inputbox"
        id="username"
        type="text"
      />

      {errors && <div className="error">{errors}</div>}
    </div>
  );
};

EmailInput.propTypes = {
  email: PropTypes.string.isRequired,
  setStoreValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  errors: makeSelectEmailError(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailInput);
