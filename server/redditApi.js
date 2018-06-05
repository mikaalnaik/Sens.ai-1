
const fetchRedditContent = (query) => {

  let rawRedditContent = await fetch(`https://api.pushshift.io/reddit/search/comment?q=${query}&limit=50`);

  let jsonRedditContent = await reddit.json();

  return resolvedReddit.data.map(data => (
    return {
      platform: 'Reddit',
      user: data.author,
      content: data.body,
      source: data.permalink,
      created_at: data.created_utc
    })
  );

}

module.exports = fetchRedditContent;
  
