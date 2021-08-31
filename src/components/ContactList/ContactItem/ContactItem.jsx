import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>{`${name}: ${number}`}</li>
  ));
};

export default ContactItem;

ContactItem.propTypes = {};
