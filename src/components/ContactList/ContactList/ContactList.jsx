import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = props => {
  return (
    <ul>
      <ContactItem />
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {};
