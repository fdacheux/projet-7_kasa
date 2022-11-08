import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import bannerHome from "../../assets/images/home-banner-img.jpg"

const title = `Chez vous, partout et ailleurs`;

function Home() {
  return (
    <main>
      <Banner isHomepage hasTitle={true} title={title} imgUrl={bannerHome} />
      <Gallery />
    </main>
  );
}

export default Home;
