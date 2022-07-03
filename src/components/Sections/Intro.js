import "./Intro.scss";

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <img
          className="intro__img"
          src="images/me-circle2.png"
          alt="my profile pic"
        ></img>
      </div>
      <div className="intro__right">
        <h1>
          Hi, I'm <span className="intro__name">Nik</span>
        </h1>
        <h2>I'm a Full Stack Developer.</h2>
      </div>
    </section>
  );
}

export default Intro;
