import type { Metadata } from 'next';
// import "./globals.css";

const Metadata = ({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) => {
    return (
        <>
        {children}
            <html>
                <head>
                    <title>TFGame</title>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    {/* <link rel="icon" href="/favicon.ico" /> */}
                    {/* <link rel="stylesheet" href="/styles/globals.css" /> */}
                </head>
                <body>
                    <div id="app">
                        {/* {children} */}
                    </div>
                </body>
            </html>
        </>
    )
}

export default Metadata;