export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
