const fetch = require('node-fetch');

async function fetchRedditPosts(query) {

  let rawRedditPosts = await fetch(`https://api.pushshift.io/reddit/search/comment?q=${query}&limit=25`);

  let jsonRedditPosts = await rawRedditPosts.json();

  let formattedPosts =  jsonRedditPosts.data.map(data => (
    {
      platform: 'Reddit',
      user: data.author,
      content: data.body,
      source: data.permalink,
      created_at: data.created_utc
    })
  );

  return formattedPosts;

}

module.exports = fetchRedditPosts;
