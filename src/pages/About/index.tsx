import Banner from "../../components/Banner";
import bannerPicture from "../../assets/images/about-banner-img.jpg";
import bannerWebpPicture from "../../assets/images/about-banner-img.webp";
import Collapse from "../../components/Collapse";
import style from "./About.module.scss";
import aboutData from "./About.data.json";

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
