import css from './Filter.module.css';
export const Filter = ({ value, filterContacts }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.labelText}>
        Find contacts by name
        <input
          className={css.inputAdd}
          type="text"
          name="filter"
          value={value}
          onChange={filterContacts}
        />
      </label>
    </div>
  );
};