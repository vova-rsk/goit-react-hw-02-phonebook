import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} />
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
