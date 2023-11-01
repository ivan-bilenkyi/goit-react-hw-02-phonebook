export const ContactForm = ({ name, number, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit"></button>
    </form>
  );
};
