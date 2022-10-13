import PageStructure from '../components/pageStructure'
import JustTextPage from '../components/content/justTextPage'
import LogoFixed from '../components/content/logoFixed'
import content from '../public/locales/de/content.json'

const Imprint = () => {
    return (
        <>
            <PageStructure
                metaTitle={content.imprint.pageTitle}
                metaDescription={content.imprint.pageDescription}
            >
                <LogoFixed />
                <JustTextPage data={content.imprint} />
            </PageStructure>
        </>
    )
}

export default Imprint