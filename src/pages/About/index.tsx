import Banner from "../../components/Banner";
import bannerAbout from "../../assets/images/about-banner-img.webp";
import Collapse from "../../components/Collapse";
import style from "./About.module.scss";
import aboutData from "./About.data.json";

function About() {

  return (
    <main>
      <Banner isHomepage={false} hasTitle={false} imgUrl={bannerAbout} />
      <section className={style.aboutSection}>
        {aboutData.map((element) => (
          <Collapse id={element.id} title={element.title} text={element.text} />
        ))}
      </section>
    </main>
  );
}

export default About;
