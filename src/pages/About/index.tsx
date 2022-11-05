import Banner from "../../components/Banner"
import bannerAbout from "../../assets/images/about-banner-img.jpg"


function About({...props}) {
    return (
        <main>
            <Banner hasTitle={false} imgUrl={bannerAbout} />
        </main>
    )
}

export default About