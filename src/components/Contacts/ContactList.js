export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            {item.name}: <span>{item.number}</span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
