export const ContactFilter = ({ filter, onFindContacts }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={evt => onFindContacts(evt.target.value)}
        placeholder="find contact"
      ></input>
    </div>
  );
};
