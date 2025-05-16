import type { Metadata } from 'next';

const Metadata = ({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <html>
                <head>
                    <title>TFGame</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    {/* <link rel="stylesheet" href="/styles/globals.css" /> */}
                </head>
                <body>
                    {children}
                    <div id="app">
                        <p>こんにいてゃ</p>
                    </div>
                </body>
            </html>
        </>
    )
}

export default Metadata;