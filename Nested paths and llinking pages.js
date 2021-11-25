// Nested paths and llinking pages
// ==========================
// The index.js file directly inside the pages folder is the index page for the root pages so index.js will link to mydomain.com/
// However with Next, if we had a url named mydomain.com/news
// We could create a folder called news and INSIDE that folder have an index.js file as it a direct child of the news folder.
// Since we can name folders in relation to the url page, when the folder is loaded, it will pick up the index.js file inside it as its immediate load -->

// pages folder => news folder = index.js
// So, when we go to mydomain.com/news => the index.js file inside that news folder will be loaded

// If we wanted to have another nested page inside the news folder say mydomain.com/news/promotion
// pages folder => news folder = promotion.js  … again remember whatever we name our file, will be displayed in the url, though the component inside can be named anything




// Creating a page identifier (by ID or whatver) = a template for an item or post like we do in react => /:id
// =======================================================================

// Lets say we have a news page that displays a list of news Items, and when we click a news item, we are brought to the actual news post.
// This is the dynamic identifier that will hold the content of each post using the template
// the  idea would be mydomain.com/news/post


// To create a dynamic page (a template page)
//  we create a file named [newsid].js or whatever we like INSIDE the news folder
// that enables us to use /news/q23445345 or /news/2 etc in the url which will pick up this specific file





// Extracting dynamic values = useRouter hook
//=====================================

import React from 'react';
import { useRouter } from 'next/router';


const newsItemTemplate = () => {

    const router = useRouter();
    const postID = router.query.newsID; // we say newsID because thats the file name of the template inside the '[]'

    // we can send a request to a backand server
    // and fetch a post with the postID

    return (
        <div>
            <h2>This is template for the news Item</h2>
            <p>{`The url id for this page is ${postID}`}</p>
        </div>
    )
}

export default newsItemTemplate;



// / this will return the value after /news/ we posted in the browser
// / so if we typed in /news/somepost, we will get back ‘somepost’








// Linking from post to template
// ========================

// pages => news => index.js.  … is where we add ur links
// page => news => [newsID].js is the template of the news index.js file

// in the index.js file we create our links and importing the Link from ‘next/link.
// in the [newsID].js file we can use the useRouter hook from next/router

// when a link is clicked in the index.js file, we will be taken to the template file which will show the ID of the url we have passed


// like so…..


// .. the index.js file

import { Fragment } from "react";
import Link from 'next/link';
const NewsPage = () => {

    return (
        <Fragment>
            <h2>News Page</h2>
            <ul>
                <li><Link href="/news/this-is-the-first-post">Post One</Link></li>
                <li><Link href="/news/this-is-the-second-post">Post Two</Link></li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;



// .. the [newsID].js (template) file

import React from 'react';
import { useRouter } from 'next/router';


const newsItemTemplate = () => {

    const router = useRouter();
    const postID = router.query.newsID;

    // we can send a request to a backand server
    // and fetch a post with the postID
    return (
        <div>
            <h2>This is template for the news Item</h2>
            <p>{`The url id for this page is ${postID}`}</p>
        </div>
    )
}

export default newsItemTemplate;


