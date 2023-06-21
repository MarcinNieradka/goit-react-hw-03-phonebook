import React from 'react';
import clsx from 'clsx';
import './ContactList.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={clsx('contacts-list')}>
      {filteredContacts.map(contact => (
        <li className={clsx('contacts-list__item')} key={contact.id}>
          <i className="fas fa-user"></i>
          {contact.name} {contact.number}
          <button
            className={clsx('contacts-list__item-button')}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
