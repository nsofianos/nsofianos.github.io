import "./Badge.scss";
function Badge({ num, title }) {
  return (
    <div className="badge">
      <h2>{num}+</h2>
      <p>{title}</p>
    </div>
  );
}

export default Badge;
