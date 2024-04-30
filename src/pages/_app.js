import '@/styles/globals.css'
import { Main } from 'next/document';
import {Montserrat} from 'next/font/google';
import Head from 'next/head';
import NavbarItem from '../components/NavbarItem.js'
import FooterItem from '@/components/FooterItem.js';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router.js';

const montserrat = Montserrat({
    subsets:['latin'],
    variable:"--font-mont",
})

export default function App({ Component, pageProps }) {
    
    const router = useRouter()

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
                <NavbarItem />
                    <AnimatePresence mode='wait'>
                        <Component key={router.asPath} {...pageProps} />
                    </AnimatePresence>
                <FooterItem />
            </main>
        </>
    )
}
