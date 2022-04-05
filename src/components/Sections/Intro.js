import "./Intro.scss";

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__img-container">
          <img
            className="intro__img"
            src="images/me-circle2.png"
            alt="my profile pic"
          ></img>
        </div>
      </div>
      <div className="intro__right">
        <h2>Hi, I'm</h2>
        <h1>Nik Sofianos</h1>
      </div>
    </section>
  );
}

export default Intro;
