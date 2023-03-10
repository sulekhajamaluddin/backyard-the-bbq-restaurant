export default function DisplayField({ text, content }) {
  return (
    <div className="content flex-column">
      <span>{text}</span> <span className="info">{content}</span>
    </div>
  );
}
