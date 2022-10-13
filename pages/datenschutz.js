import PageStructure from '../components/pageStructure'
import JustTextPage from '../components/content/justTextPage'
import LogoFixed from '../components/content/logoFixed'
import content from '../public/locales/de/content.json'

const Privacy = () => {
    return (
        <>
            <PageStructure
                metaTitle={content.privacy.pageTitle}
                metaDescription={content.privacy.pageDescription}
            >
                <LogoFixed />
                <JustTextPage data={content.privacy} />
            </PageStructure>
        </>
    )
}

export default Privacy