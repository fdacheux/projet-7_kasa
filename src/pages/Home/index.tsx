import bannerHome from "../../assets/images/home-banner-img.webp";
import Banner from "../../components/Banner";
import { FlatsContextProvider } from "../../utils/context/flatsContext";
import Gallery from "./Components/Gallery";

const title = `Chez vous, partout et ailleurs`;

function Home() {
  return (
    <main>
      <Banner isHomepage hasTitle={true} title={title} imgUrl={bannerHome} />
      <FlatsContextProvider>
        <Gallery />
      </FlatsContextProvider>
    </main>
  );
}

export default Home;
