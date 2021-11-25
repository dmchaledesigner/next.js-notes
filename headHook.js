import Head from 'next/head';

// we can use the head hook on each page to create custom head content


export default function Home() {
    return (
        <div>

            <Head>
                <title>WebDev News</title>
                <meta name="keywords" content="some words related to web development goes here" />
            </Head>
            <h1>The home page</h1>

            <main>
                <p>some content here</p>
            </main>
        </div>

    )
}
