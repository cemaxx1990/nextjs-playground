import { useState } from 'react'
import Link from 'next/link'
import Content from '../../public/locales/de/content.json'

const Header = () => {
    const [isOpenNav, setIsOpenNav] = useState(false)
    /* Combine all nav links */
    const allNavLinks = {
        ...Content.mainNav,
        ...Content.legalLinks
    };

    const toggleOpenNav = () => {
        setIsOpenNav(!isOpenNav)
    }

    return (
        <>
            <header>
                <div
                    className={`nav-button fixed top-5 right-5 w-10 h-5 flex flex-col items-end cursor-pointer z-50 ${isOpenNav === true ? 'open' : 'closed'}`}
                    onClick={toggleOpenNav}
                >
                    <span className={'line line1'}></span>
                    <span className={'line line2'}></span>
                    <span className={'line line3'}></span>
                </div>
            </header>
            <div
                className={`flex text-white items-center justify-center flex-col top-0 right-0 bottom-0 left-0 bg-gray-500 z-40 fixed transition-all duration-500 ${isOpenNav === true ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {Object.keys(allNavLinks).map(key => (
                    <Link href={allNavLinks[key].href} key={key}>
                        <a className={'py-3 hover:underline text-3xl'} onClick={toggleOpenNav}>
                            {allNavLinks[key].name}
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Header