import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Greta Perlmutter is a theater professional located in New York." />
                <meta property="og:title" content="Greta Perlmutter" />
                <meta property="og:image" content="https://gretaperlmutter.com/default.png" />
                <meta
                    property="og:description"
                    content="Greta Perlmutter is a theater professional located in New York."
                />
                <link rel="apple-touch-icon" href="https://gretaperlmutter.com/logo192.png" />
                <link rel="manifest" href="https://gretaperlmutter.com/manifest.json" />

                {process.env.NODE_ENV === 'production' && (
                    <React.Fragment>
                        <script
                            async
                            defer
                            data-collect-dnt="true"
                            src="https://sa.gretaperlmutter.com/latest.js"
                        ></script>
                        <noscript>
                            <img // eslint-disable-line
                                src="https://sa.gretaperlmutter.com/noscript.gif?collect-dnt=true"
                                alt=""
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </noscript>
                    </React.Fragment>
                )}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
