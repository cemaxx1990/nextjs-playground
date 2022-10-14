import { useEffect, useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoPng from '../../public/img/logo-jaypi.png'
import content from '../../public/locales/de/content.json'

const LogoIntro = () => {
    const [isLogoFixed, setIsLogoFixed] = useState(false)
    const [originalLogoPosition, setOriginalLogoPosition] = useState(0)

    const logoElem = useRef(null);
    const LOGO_TOP_THRESHOLD = 32

    const onScroll = () => {
        // Fix logo to top when you are about to scroll it out of viewport
        if (logoElem.current.getBoundingClientRect().y <= LOGO_TOP_THRESHOLD) {
            setIsLogoFixed(true)
        }

        // Scale logo back up and show at original position
        if (window.scrollY < originalLogoPosition + LOGO_TOP_THRESHOLD) {
            setIsLogoFixed(false)
        }
    }

    // Set logo top position
    const updateOriginalLogoPosition = useCallback(() => {
        setOriginalLogoPosition(logoElem.current.offsetTop)
    }, [logoElem, setOriginalLogoPosition])

    // Run only when the originalLogoPosition is changed
    useEffect(() => {
        updateOriginalLogoPosition()
    }, [originalLogoPosition, updateOriginalLogoPosition])

    // Run on every re-render
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', updateOriginalLogoPosition)

        // Destroy eventListener when component lifecycle ends
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', updateOriginalLogoPosition)
        }
    })

    return (
        <section className={'intro w-screen h-screen flex items-center justify-center'}>
            <Link href='/'>
                <a
                    className={`logo ${isLogoFixed === true && 'logo--fixed'}`}
                    ref={logoElem}
                >
                    <Image
                        src={logoPng}
                        alt={content.general.logoAlt}
                        className={'w-full'}
                        priority={true}
                    />
                </a>
            </Link>
        </section>
    )
}

export default LogoIntro