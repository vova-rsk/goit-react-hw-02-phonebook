import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts }) => {
  return contacts.map(({ id, name }) => <li key={id}>{name}</li>);
};

export default ContactItem;

ContactItem.propTypes = {};
