import portrait from "../img/dev-jane-02.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about"></p>
      <div className="about-me__body">
        <p></p>
      </div>
      <img src={portrait} alt="portrait"></img>
    </section>
  );
}

export default About;
