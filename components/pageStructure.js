import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './base/header'
import Footer from './base/footer'

const PageStructure = (props) => {
    return (
        <>
            <Head>
                <title>{props.metaTitle}</title>
                <meta name="description" content={props.metaDescription} />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={props.metaTitle} />
                <meta property="og:description" content={props.metaDescription} />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_HOST}${useRouter().pathname}`} />
                <meta property="og:image" content="/img/share-logo.jpg" />
            </Head>
            <Header />

            {props.children}

            <Footer />
        </>
    )
}

export default PageStructure