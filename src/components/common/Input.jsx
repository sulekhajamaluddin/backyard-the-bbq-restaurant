export default function Input({ ...props }) {
  return (
    <label className="input-holder">
      <span>{props.text}</span>
      <input
        type="text"
        id={props.id}
        required
        onChange={(e) => props.onChange(e)}
      ></input>
    </label>
  );
}
