import portfolio1 from "../img/portfolio-01.jpg";
import portfolio2 from "../img/portfolio-02.jpg";
import portfolio3 from "../img/portfolio-03.jpg";

function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My Work</h2>
      <p className="section__subtitle"></p>
      <div className="portfolio">
        <a href="#" className="portfolio__item">
          <img src={portfolio1}></img>
        </a>

        <a href="#" className="portfolio__item">
          <img src={portfolio2}></img>
        </a>

        <a href="#" className="portfolio__item">
          <img src={portfolio3}></img>
        </a>
      </div>
    </section>
  );
}

export default Work;
