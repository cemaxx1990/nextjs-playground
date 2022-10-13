import Image from 'next/image'
import teaser from '../../public/img/teaser.jpg'
import content from '../../public/locales/de/content.json'

const ImageTeaser = () => {
    return (
        <section className={'w-screen'}>
            {/* ToDo: Add more images and make them random */}
            <Image
                src={teaser}
                alt={content.general.imgTeaserAlt}
                layout={'responsive'}
            />
        </section>
    )
}

export default ImageTeaser