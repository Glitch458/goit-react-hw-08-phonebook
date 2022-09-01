import { useDeleteContactMutation } from 'redux/ContactApi';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
