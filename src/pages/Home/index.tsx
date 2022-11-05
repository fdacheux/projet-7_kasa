import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import bannerHome from "../../assets/images/home-banner-img.jpg"
import style from './Home.module.scss'

const title = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <main className={style.main} style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner hasTitle={true} title={title} imgUrl={bannerHome} />
      <Gallery />
    </main>
  );
}

export default Home;
