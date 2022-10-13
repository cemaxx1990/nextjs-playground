import PageStructure from '../components/pageStructure'
import LogoIntro from '../components/content/logoIntro'
import TextSection from '../components/content/textSection'
import ImageTeaser from '../components/content/imageTeaser'
import Services from '../components/content/services'
import content from '../public/locales/de/content.json'

const Home = () => {
    return (
        <>
            <PageStructure
                metaTitle={content.general.pageTitle}
                metaDescription={content.general.pageDescription}
            >
                <LogoIntro />
                <TextSection data={content.introText} h1={true} />
                <ImageTeaser />
                <Services data={content.services} />
                <ImageTeaser />
            </PageStructure>
        </>
    )
}

export default Home