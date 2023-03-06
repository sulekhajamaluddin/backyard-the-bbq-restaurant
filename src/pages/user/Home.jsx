//Project Files
import halfBowl from "../../assets/half-bowl.png";
import bowl from "../../assets/bowl.jpg";

export default function Home() {
  return (
    <div className="home">
      <section className="hero flex-column-center">
        <h1>Backyard BBQ</h1>
        <h2>The best in town!!</h2>
        <picture>
          <source className="bbq" media="(min-width:750px)" srcSet={bowl} />
          <img className="bbq" src={halfBowl} alt="A bowl with bbq chicken" />
        </picture>
      </section>
    </div>
  );
}
