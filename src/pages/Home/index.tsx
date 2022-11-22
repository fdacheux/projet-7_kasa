import bannerPicture from "../../assets/images/home-banner-img.jpg";
import bannerWebpPicture from "../../assets/images/home-banner-img.webp";
import Banner from "../../components/Banner";
import { FlatsContextProvider } from "../../utils/context/flatsContext";
import Gallery from "./Components/Gallery";

const title = `Chez vous, partout et ailleurs`;

function Home() {
  return (
    <main>
      <Banner isHomepage hasTitle={true} title={title} imgWebpUrl={bannerWebpPicture} imgUrl={bannerPicture} />
      <FlatsContextProvider>
        <Gallery />
      </FlatsContextProvider>
    </main>
  );
}

export default Home;
