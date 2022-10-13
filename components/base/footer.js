import Link from 'next/link'
import Obfuscate from 'react-obfuscate'
import content from '../../public/locales/de/content.json'

const Footer = () => {
    return (
        <>
            <section className={'bg-gray-900 text-white'} id={'kontakt'}>
                <section className={'max-w-screen-xl mx-auto px-4 py-20'}>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-20'}>
                        <div>
                            <h2 className={'pb-2'}>{content.preFooter.headline}</h2>
                            <p>{content.preFooter.subline}</p>
                        </div>
                        <div>
                            <h3>{content.general.fullName}</h3>
                            <div className={'pt-4'}>
                                <Obfuscate tel={content.general.phone} />
                            </div>
                            <div className={'pt-1 hover:underline'}>
                                <Obfuscate email={content.general.email}>
                                    {content.general.emailText}
                                </Obfuscate>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <footer className={'bg-black text-white py-4 flex justify-center'}>
                {Object.keys(content.legalLinks).map(key => (
                    <Link href={content.legalLinks[key].href} key={key}>
                        <a className={'px-4 hover:underline'}>
                            {content.legalLinks[key].name}
                        </a>
                    </Link>
                ))}
            </footer>
        </>
    )
}

export default Footer