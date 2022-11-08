import Banner from "../../components/Banner";
import bannerAbout from "../../assets/images/about-banner-img.webp";
import Collapse from "../../components/Collapse";
import style from "./About.module.scss"

function About({ ...props }) {
  return (
    <main>
      <Banner isHomepage={false} hasTitle={false} imgUrl={bannerAbout} />
      <section className={style.aboutSection}>
        <Collapse />
      </section>
    </main>
  );
}

export default About;
