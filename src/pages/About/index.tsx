import Banner from "../../components/Banner";
import aboutData from "../../data/about.data.json";
import Collapse from "../../components/Collapse";
import bannerPicture from "../../assets/images/about-banner-img.jpg";
import bannerWebpPicture from "../../assets/images/about-banner-img.webp";
import style from "./About.module.scss";

function About() {
  const title = "Nos valeurs ...";
  return (
    <main>
      <Banner
        isHomepage={false}
        hasTitle={true}
        imgWebpUrl={bannerWebpPicture}
        imgUrl={bannerPicture}
        title={title}
      />
      <section className={style.aboutSection}>
        {aboutData.map((element) => (
          <Collapse
            id={element.id}
            title={element.title}
            key={`about-${element.id}`}
          >
            <p className={style.aboutSection__text}>{element.text}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}

export default About;
