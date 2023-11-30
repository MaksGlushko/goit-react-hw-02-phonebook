import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          {name}: {number}
          <button onClick={() => handleDelete(id)} className={css.btnDel}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};