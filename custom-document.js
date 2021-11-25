
// Creating the custom document => generally we do not need to do this but worth having a look!

// https://nextjs.org/docs/advanced-features/custom-document


// A custom Document is commonly used to augment your application's <html> and <body> tags.
// This is necessary because Next.js pages skip the definition of the surrounding document's markup.


// To override the default Document, create the file ./pages/_document.js and extend the Document class as shown below:


import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument



// 1. create the _document.js file inside pages folder and drop in the code above.
    // note: if we create this document and leave it blank the site will break as this doc overides the next.js doc

// 2. we can now alter the code inside this document to whatever we need
// 3. we can change the html tag like so, <Html lang="en">







// getServerSideProps
//======================

