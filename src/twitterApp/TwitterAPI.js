import axios from 'axios';
import OAuth from 'oauth-1.0a';

// Your Twitter API keys
const API_KEY = 'JBCHl93LbZg1kUgS3vEayABaA';
const API_SECRET_KEY = 'jM5KBElxjfvwSFsIrLlgNmyqwwk5zvjgg8BHNfb2FCbfsTV01z';
const ACCESS_TOKEN = '347815375-IO3hQapP0IYwBTu81dRRcVs5HypTu2BUCLKsIL6d';
const ACCESS_TOKEN_SECRET = '2hgGTchJ5pHwp41OXD07X55o2M95CycJqEspDhrTRJThM';
const Beerer_Token="AAAAAAAAAAAAAAAAAAAAAGbAHwEAAAAAjoyLcufahu0RRmVf95oyAucwDl0%3DphU2TYTZVB4QPpoDuONuMZU9sbPB4TCL6cqzqPx9VM3IEN7HEB"

// Twitter API URLs
const BASE_URL = 'https://api.twitter.com/1.1/';
const TIMELINE_ENDPOINT = 'statuses/user_timeline.json';

// Create an OAuth 1.0a instance
const oauth = OAuth({
  consumer: { 
     key: API_KEY,
     secret: API_SECRET_KEY
     },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});
const fetchUserTimeline = async (screenName) => {
  console.log("1111111",screenName)
  const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  const requestParams = {
    screen_name: screenName, // Replace with the Twitter username you want to fetch the timeline for
    count: 10, // Adjust the number of tweets to retrieve as needed
  };

  const requestConfig = {
    method: 'GET',
    url,
    params: requestParams,
    headers: oauth.toHeader(oauth.authorize({}, {})), // Add authorization headers
  };

  try {
    console.log("2222222222222");
    const response = await axios(requestConfig);
    console.log("3333333333333",response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching user timeline:', error);
    return null;
  }
};
export default fetchUserTimeline;



// // Set up the headers for the API request
// const headers = oauth.toHeader(oauth.authorize({ key: API_KEY, secret: API_SECRET_KEY }, {}), {
//   'X-Host': 'api.twitter.com',
// });

// headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

// // Make the API call
// const fetchTwitterTimeline = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}${TIMELINE_ENDPOINT}`, {
//       headers,
//       params: { screen_name: 'twitterusername', count: 10 }, // Replace 'twitterusername' with the desired Twitter username
//     });
//     console.log(response.data);
//     // Handle the response data here
//   } catch (error) {
//     console.error('Error fetching Twitter timeline:', error);
//     // Handle errors here
//   }
// };

// export default fetchTwitterTimeline;