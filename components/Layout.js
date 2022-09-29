import React from 'react'
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name='viewport' content='width=device-width, initial-scae=1.0' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;800&display=swap" rel="stylesheet"></link>
                <title>FabriDev</title>

            </Head>

            <div className='container' style={{ backgroundColor: '#18181B', width: '100%' }} >
                {children}
            </div>

        </>
    )
}

export default Layout