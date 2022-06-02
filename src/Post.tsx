export function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>
        <strong>{props.author}</strong>
      </p>
    </div>
  );
}
