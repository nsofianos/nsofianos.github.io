import portrait from "../img/dev-jane-01.jpg";

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Nik Sofianos</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        front-end dev
      </p>
      <img src={portrait} alt="self-portrait"></img>
    </section>
  );
}

export default Intro;
