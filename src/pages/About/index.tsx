import Banner from "../../components/Banner";
import bannerAbout from "../../assets/images/about-banner-img.jpg";
import Collapse from "../../components/Collapse";

function About({ ...props }) {
  return (
    <main>
      <Banner isHomepage={false} hasTitle={false} imgUrl={bannerAbout} />
      <section className="À propos">
        <Collapse />
      </section>
    </main>
  );
}

export default About;
