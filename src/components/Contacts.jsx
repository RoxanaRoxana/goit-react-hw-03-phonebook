import PropTypes from 'prop-types';
import styles from './Contacts.module.css'

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={styles.contact__list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact__item}>
            <p className={styles.contact__text}>{name}:</p>
            <p className={styles.contact__text}>{number}</p>
            <button
              onClick={() => onDeleteContact(id)}
              className={styles.contact__button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
