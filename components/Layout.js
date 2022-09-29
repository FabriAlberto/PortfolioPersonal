import React from 'react'
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name='viewport' content='width=device-width, initial-scae=1.0' />
                <title>FabriDev</title>

            </Head>

            <div className='container' style={{ backgroundColor: '#18181B',display:'flex',justifyContent:'center',alignItems:'center' }} >
                {children}
            </div>

        </>
    )
}

export default Layout