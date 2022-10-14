import Image from 'next/image'
import Link from 'next/link'
import logoPng from '../../public/img/logo-jaypi.png'
import content from '../../public/locales/de/content.json'

const LogoFixed = () => {
    return (
        <section className={'w-screen flex items-center justify-center'}>
            <Link href='/'>
                <a className={'logo logo--fixed'}>
                    <Image
                        src={logoPng}
                        alt={content.general.logoAlt}
                        className={"w-full"}
                        priority={true}
                    />
                </a>
            </Link>
        </section>
    )
}

export default LogoFixed