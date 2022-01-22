//with api routing we can fetch static data from a json file and make requests to that data for dislaying inside pages

// 1. create a data.js file like so

export const articles = [
    {
        id: '1',
        title: 'GitHub introduces dark mode and auto-merge pull request',
        excerpt:
            'GitHub today announced a bunch of new features at its virtual GitHub...',
        body:
            'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?',
    },
    {
        id: '2',
        title: "What’s multi-cloud? And why should developers care?",
        excerpt: 'Most developers don’t care about multi-cloud. But they should...',
        body:
            'Most developers don’t care about multi-cloud. But they should. Whether developers know it or not, their companies likely already have a multi-cloud environment.    Multi-cloud is a strategy where a business selects different services from different cloud providers',
    },

]




//inside the pages => api folder we create a folder called 'articles' => [id] => index.js
// which is the same as 'artices' (folder) [id].js

//NOTE: both the below files are INSIDE a new 'articles' folder in the API folder
// 1.  copy the code from the hello.js file and paste it into a new index.js
// this will be route dynamic route fetch for the /articles/template.js file

// 2. but we also need to create the [id] file to call in the data using the same code but modified.


// What we are trying to achieve is to create the fetch request on the data via the api folder we create within next.js

// http://localhost:3000/api/articles/ is where we can get our json object data once our indez api export is created






// the api => articles => index.js file
import { articles } from '../../../data' // bring in the data


// use the sample code from the hello.js file
// this gets all the data that we need
export default function handler(req, res) {
    res.status(200).json(articles)
}





// the api => articles => [id].js file

import { articles } from '../../../data'; // get the data from the route


export default function handler(req, res) { // destructure the query => id from the req object


    const id = req.query.id;
    // or we could desctrucure the req object
    // (req, res) to ({query: {id}}, res)

    // filter the post into a new array if the iteration.id === to the query.id
    const filtered = articles.filter((article) => article.id === id)


    if (filtered.length > 0) { // if exists then convert to json data
        res.status(200).json(filtered[0]) // filtered is an array so we need [0] => first item
    } else { // if doesnt exist
        res.status(404).json({ message: `Article with the id of ${id} is not found` })
    }
}


// check the url for post 1 (id of 1) => http://localhost:3000/api/articles/1
// check the irl for post 2 (id of 2) => http://localhost:3000/api/articles/2
//etc


