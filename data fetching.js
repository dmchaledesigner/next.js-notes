// data fetching
// ==================

// See https://nextjs.org/docs/basic-features/data-fetching for all tutorials and explanations



// NOTE: we cannot use data fetching with NEXT.js inside of general components => only within pages!



// If we use useEffect, like we do in React,  the componet loads, then the data loads and displays on the page.
// But when we use NEXT, once the component loads, that initial snapshot is now our document html, even if data is loaded later.
// Therefore, even though the data is displayed in the browser, the HTML in the DOM is missing.

// in NEXT we have 3 ways of fetching data

getStaticProps(); // Static Generation => fetch data at build time.
getStaticPaths(); // Static Generation => Specify dynamic routes to pre-render pages based on data.
getServerSideProps(); // Server-side Rendering => Fetch data on each request.








// GETSTATICPROPS
//======================

// If you export an async function called getStaticProps from a page,
// Next.js will pre-render this page at build time using the props returned by getStaticProps.

// getStaticProps can only be exported from a page. You can’t export it from non-page files.
// One of the reasons for this restriction is that React needs to have all the required data before the page is rendered.

// Also, you must use export async function getStaticProps() {} — it will not work if you add getStaticProps as a property of the page component.

export async function getStaticProps(context) { // exported async function
    const response = await fetch('mydomain.com/api/myJsonData'); // fetch promise
    const data = await response.json();
    return {
        props: { // will be passed to the page component as props
            dataRequested: data, // we create our key and pass in the 
        },
    }
}






// Example and explanation inside a component
import ArticleList from '../components/ArticleList'; // importing the ArticlesList which we pass the down the data from the fetch  request

const Home = (props) => { // we could use {articles here instead of props but props is more universal if we have multple elements that we need props for}



    return (
        <div>
            <ArticleList articles={props.articles} />
        </div>
    )
}


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const data = await response.json();

    return {
        props: {
            articles: data, // we assign the data we get from the fetch request, then we add 'props' into the Home component and finally pass that prop down inside the ArticleList
        }
    }
}

export default Home;









//similar example using deconstructed props

//again...
// 1. we make the request and return an onject with a key called articles with the value of the data variable.
// 2. that object is passed as a prop to the main component itself and then can be used inside the component to be then passed inside a nested component, in this case ArticlesList


import ArticleList from '../components/ArticleList';

const Home = ({ articles }) => {



    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    )
}


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const data = await response.json();

    return {
        props: {
            articles: data,
        }
    }
}

export default Home;














// GETSERVERSIDEPROPS
//===========================

// We use this function when needing dynamic data, eg, for when we use a dynamic (template) page ie, a post item where we need the ID [id].js

// getServerSideProps is used to make a call to return the specific post ID
// Note the context parameter
// console.log the context param to access this object and items we can return




export const getServerSideProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    // console.log(context) => this will show in the vsCode terminal 
    // console.log(context.params.id)

    const article = await response.json();
    // console.log(article);

    if (!article) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            singlePost: article,
        }
    }
}

export default articleTemplate;




//example
import React from 'react';
import Link from 'next/link';

const articleTemplate = (props) => {

    const { title, body } = props.singlePost; // 4 The prop singlepost is deconstructed so we can access its values to use in JSX code below

    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link href="/">Go back</Link>

        </>
    )
}




export const getServerSideProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`); // 1. request is made
    // console.log(context) => this will show in the vsCode terminal 
    // console.log(context.params.id)

    const article = await response.json(); // 2. response is stored in a json object
    // console.log(article);

    if (!article) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            singlePost: article, // 3. The object is stored in a prop called singlePost
        }
    }
}

export default articleTemplate;
