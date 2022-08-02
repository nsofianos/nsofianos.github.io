import "./Badge.scss";
function Badge({ num, title }) {
  return (
    <div className="badge">
      <h1>{num}+</h1>
      <p>{title}</p>
    </div>
  );
}

export default Badge;
