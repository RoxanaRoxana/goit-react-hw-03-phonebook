import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css'

export const ContactsFilter = ({ value, onChange }) => {
    return (
      
        <label className={styles.contactFilter}>
          Find contacts by name
          <input type="text" value={value} onChange={onChange} className={styles.filterInput} />
        </label>
      
    );
};


ContactsFilter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}